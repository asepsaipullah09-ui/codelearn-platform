const pythonTopics = {
  introduction: {
    title: "Introduction",
    content: `
Python adalah bahasa pemrograman yang mudah dipelajari.
Python banyak digunakan untuk web development, data science,
AI, automation, dan masih banyak lagi.
    `,
    code: `print("Hello World")`
  },

  variables: {
    title: "Variables",
    content: `
Variabel digunakan untuk menyimpan data.
Python tidak perlu mendeklarasikan tipe data secara eksplisit.
    `,
    code: `
x = 10
name = "Asep"
print(x)
print(name)
    `
  },

  operators: {
    title: "Operators",
    content: `
Operator digunakan untuk melakukan operasi matematika
dan perbandingan.
    `,
    code: `
a = 5
b = 3
print(a + b)
print(a > b)
    `
  }
};

export default pythonTopics;