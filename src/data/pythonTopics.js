export const pythonOrder = [
  "introduction",
  "variables",
  "operators"
];

const pythonTopics = {
  introduction: {
    title: "Introduction",
    content: `Python adalah bahasa pemrograman yang mudah dipelajari.`,
    code: `print("Hello World")`
  },

  variables: {
    title: "Variables",
    content: `Variabel digunakan untuk menyimpan data.`,
    code: `
x = 10
name = "Asep"
print(x)
print(name)
`
  },

  operators: {
    title: "Operators",
    content: `Operator digunakan untuk operasi matematika.`,
    code: `
a = 5
b = 3
print(a + b)
`
  }
};

export default pythonTopics;