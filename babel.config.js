module.exports = {
  presets: [
    ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    "nativewind/babel",
  ],
  plugins: [
    [
      'module-resolver','nativewind/babel',
      {
        root: ['./'],
        alias: {
          '@': './',
        },
      },
    ],
  ],
};
