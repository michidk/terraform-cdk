// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export const functionsMapGenerated = {
  abs: {
    name: "abs",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
    ],
  },
  abspath: {
    name: "abspath",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  alltrue: {
    name: "alltrue",
    returnType: "bool",
    parameters: [
      {
        type: ["list", "bool"],
      },
    ],
  },
  anytrue: {
    name: "anytrue",
    returnType: "bool",
    parameters: [
      {
        type: ["list", "bool"],
      },
    ],
  },
  base64decode: {
    name: "base64decode",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  base64encode: {
    name: "base64encode",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  base64gzip: {
    name: "base64gzip",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  base64sha256: {
    name: "base64sha256",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  base64sha512: {
    name: "base64sha512",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  basename: {
    name: "basename",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  can: {
    name: "can",
    returnType: "bool",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  ceil: {
    name: "ceil",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
    ],
  },
  chomp: {
    name: "chomp",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  chunklist: {
    name: "chunklist",
    returnType: ["list", ["list", "dynamic"]],
    parameters: [
      {
        type: ["list", "dynamic"],
      },
      {
        type: "number",
      },
    ],
  },
  cidrhost: {
    name: "cidrhost",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "number",
      },
    ],
  },
  cidrnetmask: {
    name: "cidrnetmask",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  cidrsubnet: {
    name: "cidrsubnet",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "number",
      },
      {
        type: "number",
      },
    ],
  },
  cidrsubnets: {
    name: "cidrsubnets",
    returnType: ["list", "string"],
    parameters: [
      {
        type: "string",
      },
      {
        type: "number",
        variadic: true,
      },
    ],
  },
  coalesce: {
    name: "coalesce",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  coalescelist: {
    name: "coalescelist",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  compact: {
    name: "compact",
    returnType: ["list", "string"],
    parameters: [
      {
        type: ["list", "string"],
      },
    ],
  },
  concat: {
    name: "concat",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  contains: {
    name: "contains",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
      {
        type: "dynamic",
      },
    ],
  },
  csvdecode: {
    name: "csvdecode",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  dirname: {
    name: "dirname",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  distinct: {
    name: "distinct",
    returnType: ["list", "dynamic"],
    parameters: [
      {
        type: ["list", "dynamic"],
      },
    ],
  },
  element: {
    name: "element",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
      {
        type: "number",
      },
    ],
  },
  endswith: {
    name: "endswith",
    returnType: "bool",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  file: {
    name: "file",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filebase64: {
    name: "filebase64",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filebase64sha256: {
    name: "filebase64sha256",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filebase64sha512: {
    name: "filebase64sha512",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  fileexists: {
    name: "fileexists",
    returnType: "bool",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filemd5: {
    name: "filemd5",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  fileset: {
    name: "fileset",
    returnType: ["set", "string"],
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  filesha1: {
    name: "filesha1",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filesha256: {
    name: "filesha256",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  filesha512: {
    name: "filesha512",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  flatten: {
    name: "flatten",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  floor: {
    name: "floor",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
    ],
  },
  format: {
    name: "format",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  formatdate: {
    name: "formatdate",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  formatlist: {
    name: "formatlist",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  indent: {
    name: "indent",
    returnType: "string",
    parameters: [
      {
        type: "number",
      },
      {
        type: "string",
      },
    ],
  },
  index: {
    name: "index",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
      {
        type: "dynamic",
      },
    ],
  },
  jsondecode: {
    name: "jsondecode",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  jsonencode: {
    name: "jsonencode",
    returnType: "string",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  keys: {
    name: "keys",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  length: {
    name: "lengthOf",
    returnType: "number",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  log: {
    name: "log",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
      {
        type: "number",
      },
    ],
  },
  lower: {
    name: "lower",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  matchkeys: {
    name: "matchkeys",
    returnType: ["list", "dynamic"],
    parameters: [
      {
        type: ["list", "dynamic"],
      },
      {
        type: ["list", "dynamic"],
      },
      {
        type: ["list", "dynamic"],
      },
    ],
  },
  max: {
    name: "max",
    returnType: "number",
    parameters: [
      {
        type: "number",
        variadic: true,
      },
    ],
  },
  md5: {
    name: "md5",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  merge: {
    name: "merge",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  min: {
    name: "min",
    returnType: "number",
    parameters: [
      {
        type: "number",
        variadic: true,
      },
    ],
  },
  nonsensitive: {
    name: "nonsensitive",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  one: {
    name: "one",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  parseint: {
    name: "parseint",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
      {
        type: "number",
      },
    ],
  },
  pathexpand: {
    name: "pathexpand",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  pow: {
    name: "pow",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
      {
        type: "number",
      },
    ],
  },
  regex: {
    name: "regex",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  regexall: {
    name: "regexall",
    returnType: ["list", "dynamic"],
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  replace: {
    name: "replace",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  reverse: {
    name: "reverse",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  rsadecrypt: {
    name: "rsadecrypt",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  sensitive: {
    name: "sensitive",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  setintersection: {
    name: "setintersection",
    returnType: ["set", "dynamic"],
    parameters: [
      {
        type: ["set", "dynamic"],
      },
      {
        type: ["set", "dynamic"],
        variadic: true,
      },
    ],
  },
  setproduct: {
    name: "setproduct",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  setsubtract: {
    name: "setsubtract",
    returnType: ["set", "dynamic"],
    parameters: [
      {
        type: ["set", "dynamic"],
      },
      {
        type: ["set", "dynamic"],
      },
    ],
  },
  setunion: {
    name: "setunion",
    returnType: ["set", "dynamic"],
    parameters: [
      {
        type: ["set", "dynamic"],
      },
      {
        type: ["set", "dynamic"],
        variadic: true,
      },
    ],
  },
  sha1: {
    name: "sha1",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  sha256: {
    name: "sha256",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  sha512: {
    name: "sha512",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  signum: {
    name: "signum",
    returnType: "number",
    parameters: [
      {
        type: "number",
      },
    ],
  },
  slice: {
    name: "slice",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
      {
        type: "number",
      },
      {
        type: "number",
      },
    ],
  },
  sort: {
    name: "sort",
    returnType: ["list", "string"],
    parameters: [
      {
        type: ["list", "string"],
      },
    ],
  },
  split: {
    name: "split",
    returnType: ["list", "string"],
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  startswith: {
    name: "startswith",
    returnType: "bool",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  strrev: {
    name: "strrev",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  substr: {
    name: "substr",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "number",
      },
      {
        type: "number",
      },
    ],
  },
  sum: {
    name: "sum",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  templatefile: {
    name: "templatefile",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
      {
        type: "dynamic",
      },
    ],
  },
  textdecodebase64: {
    name: "textdecodebase64",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  textencodebase64: {
    name: "textencodebase64",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  timeadd: {
    name: "timeadd",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  timecmp: {
    name: "timecmp",
    returnType: "number",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  timestamp: {
    name: "timestamp",
    returnType: "string",
    parameters: [],
  },
  title: {
    name: "title",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  tobool: {
    name: "tobool",
    returnType: "bool",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  tolist: {
    name: "tolist",
    returnType: ["list", "dynamic"],
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  tomap: {
    name: "tomap",
    returnType: ["map", "dynamic"],
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  tonumber: {
    name: "tonumber",
    returnType: "number",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  toset: {
    name: "toset",
    returnType: ["set", "dynamic"],
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  tostring: {
    name: "tostring",
    returnType: "string",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  transpose: {
    name: "transpose",
    returnType: ["map", ["list", "string"]],
    parameters: [
      {
        type: ["map", ["list", "string"]],
      },
    ],
  },
  trim: {
    name: "trim",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  trimprefix: {
    name: "trimprefix",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  trimspace: {
    name: "trimspace",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  trimsuffix: {
    name: "trimsuffix",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  try: {
    name: "try",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
        variadic: true,
      },
    ],
  },
  upper: {
    name: "upper",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  urlencode: {
    name: "urlencode",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  uuid: {
    name: "uuid",
    returnType: "string",
    parameters: [],
  },
  uuidv5: {
    name: "uuidv5",
    returnType: "string",
    parameters: [
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
  values: {
    name: "values",
    returnType: "dynamic",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  yamldecode: {
    name: "yamldecode",
    returnType: "dynamic",
    parameters: [
      {
        type: "string",
      },
    ],
  },
  yamlencode: {
    name: "yamlencode",
    returnType: "string",
    parameters: [
      {
        type: "dynamic",
      },
    ],
  },
  zipmap: {
    name: "zipmap",
    returnType: "dynamic",
    parameters: [
      {
        type: ["list", "string"],
      },
      {
        type: "dynamic",
      },
    ],
  },
};
