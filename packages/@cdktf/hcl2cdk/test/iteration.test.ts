// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, binding } from "./helpers/convert";

describe("iteration", () => {
  testCase.test(
    "for each on list using splat",
    `
          provider "aws" {
            region                      = "us-east-1"
          }
          variable "buckets" {
            type    = list(string)
          }
    
          resource "aws_kms_key" "examplekms" {
            description             = "KMS key 1"
            deletion_window_in_days = 7
          }
          
          resource "aws_s3_bucket" "examplebucket" {
            for_each = toset(var.buckets.*)
    
            bucket = each.key
            acl    = "private"
          }
          
          resource "aws_s3_bucket_object" "examplebucket_object" {
            for_each = toset(aws_s3_bucket.examplebucket.*)
    
            key        = "someobject"
            bucket     = each.key
            source     = "index.html"
            kms_key_id = aws_kms_key.examplekms.arn
          }
          `,
    [binding.aws],
    Synth.yes,
    {
      resources: ["aws_kms_key", "aws_s3_bucket", "aws_s3_bucket_object"],
    }
  );

  testCase.test(
    "for_each loops",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
          variable "users" {
            type = set(string)
          }
    
          resource "aws_iam_user" "lb" {
            for_each = var.users
            name = each.key
            path = "/system/"
          
            tags = {
              tag-key = "tag-value"
            }
          }
          `,
    [binding.aws],
    Synth.yes,
    {
      resources: ["aws_iam_user"],
    }
  );

  testCase.test(
    "count loops",
    `
            provider "aws" {
              region                      = "us-east-1"
            }
            variable "users" {
              type = set(string)
            }
    
            resource "aws_iam_user" "lb" {
              count = length(var.users)
              name = element(var.users, count.index)
              path = "/system/"
            
              tags = {
                tag-key = "tag-value"
              }
            }`,
    [binding.aws],
    Synth.yes,
    {
      resources: ["aws_iam_user"],
    }
  );

  testCase.test(
    "simple count",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        resource "aws_instance" "multiple_servers" {
          count = 4
        
          ami           = "ami-0c2b8ca1dad447f8a"
          instance_type = "t2.micro"
        
          tags = {
            Name = "Server \${count.index}"
          }
        }
        `,
    [binding.aws],
    Synth.yes,
    {
      resources: ["aws_instance"],
    }
  );

  testCase.test(
    "dynamic blocks",
    `
          provider "aws" {
            region                      = "us-east-1"
          }
          variable "settings" {
            type = list(map(string))
          }
    
          variable "namespace" {
            type = string
          }
    
          resource "aws_elastic_beanstalk_environment" "tfenvtest" {
            name                = "tf-test-name"
            application         = "best-app"
            solution_stack_name = "64bit Amazon Linux 2018.03 v2.11.4 running Go 1.12.6"
          
            dynamic "setting" {
              for_each = var.settings
              content {
                namespace = var.namespace
                name = setting.value["name"]
                value = setting.value["value"]
              }
            }
          }`,
    [binding.aws],
    Synth.yes,
    {
      resources: ["aws_elastic_beanstalk_environment"],
    }
  );

  testCase.test(
    "complex for each loops",
    `
      provider "aws" {
        region = "us-east-1"
      }
    
      resource "aws_acm_certificate" "example" {
        domain_name       = "example.com"
        validation_method = "DNS"
      }
      
      data "aws_route53_zone" "example" {
        name         = "example.com"
        private_zone = false
      }
      
      resource "aws_route53_record" "example" {
        for_each = {
          for dvo in aws_acm_certificate.example.domain_validation_options : dvo.domain_name => {
            name   = dvo.resource_record_name
            record = dvo.resource_record_value
            type   = dvo.resource_record_type
          }
        }
      
        allow_overwrite = true
        name            = each.value.name
        records         = [each.value.record]
        ttl             = 60
        type            = each.value.type
        zone_id         = data.aws_route53_zone.example.zone_id
      }
      
      resource "aws_acm_certificate_validation" "example" {
        certificate_arn         = aws_acm_certificate.example.arn
        validation_record_fqdns = [for record in aws_route53_record.example : record.fqdn]
      }
      
      resource "aws_lb_listener" "example" {
        # ... other configuration ...
        
        certificate_arn   = aws_acm_certificate_validation.example.certificate_arn
        load_balancer_arn = "best-lb-arn" 
        default_action  {
          type             = "forward"
          target_group_arn = "best-target"
        }
      }
      `,
    [binding.aws],
    Synth.yes,
    {
      resources: [
        "aws_lb_listener",
        "aws_acm_certificate_validation",
        "aws_route53_record",
        "aws_acm_certificate",
      ],
      dataSources: ["aws_route53_zone"],
    }
  );

  testCase.test(
    "for_each with var usage",
    `
          provider "azuread" {
            tenant_id = "00000000-0000-0000-0000-000000000000"
          }
          variable "one_set_of_users" {
            description = "users"
          }
          variable "other_set_of_users" {
            description = "users"
          }
          variable "azure_ad_domain_name" {
            description = "domain"
          }
          resource "azuread_user" "azure_users" {
            for_each = merge(
              var.one_set_of_users,
              var.other_set_of_users,
            )
          
            user_principal_name = "\${each.value}\${var.azure_ad_domain_name}"
            display_name        = each.key
          }
          `,
    [binding.azuread],
    Synth.yes,
    {
      resources: ["azuread_user"],
    }
  );
});
