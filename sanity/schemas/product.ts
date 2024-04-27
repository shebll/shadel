const Product = {
  name: "Product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "MainImage",
      type: "image",
      option: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "secImages",
      title: "secImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "heating", value: "heating" },
          { title: "cold", value: "cold" },
          { title: "kitchen", value: "kitchen" },
          { title: "laundry", value: "laundry" },
          { title: "boiler", value: "boiler" },
          { title: "others", value: "others" },
          { title: "castle", value: "castle" },
          { title: "burner", value: "burner" },
          { title: "utensils", value: "utensils" },
          { title: "coffe", value: "coffe" },
        ],
      },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
}
export default Product
