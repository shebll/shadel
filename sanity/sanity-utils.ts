import { createClient, groq } from "next-sanity"
import ProductMachineType from "@/types/Product"

/* fetching data using groq all projects */
async function getProducts(type: string | null): Promise<ProductMachineType[]> {
  const client = createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  })

  let query
  let params = {}
  // Machine

  if (type) {
    query = groq`*[_type=="Product" && type == $type] {
      _id,
      _createdAt,
      name,
      "mainImage": mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description
    }`
    params = { type }
  } else {
    query = groq`*[_type=="Product"] {
      _id,
      _createdAt,
      name,
      "mainImage": mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description
    }`
  }

  return client.fetch(query, params)
}

/* fetching data using groq specific projects */
async function getProduct(id: string): Promise<ProductMachineType> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type == "Product" && _id == $id][0]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      description,
      category,
    }`,
    { id }
  )
}
async function getMachines(type: string | null): Promise<ProductMachineType[]> {
  const client = createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  })

  let query
  let params = {}
  if (type) {
    query = groq`*[_type=="Machine" && type == $type] {
      _id,
      _createdAt,
      name,
      "mainImage": mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description
    }`
    params = { type }
  } else {
    query = groq`*[_type=="Machine"] {
      _id,
      _createdAt,
      name,
      "mainImage": mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description
    }`
  }
  return client.fetch(query, params)

  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type=="Machine"]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description,
    }`
  )
}

/* fetching data using groq specific projects */
async function getMachine(id: string): Promise<ProductMachineType> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type == "Machine" && _id == $id][0]
    {
      _id, 
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      "table" : table.asset->url,
      url,
      content,
      features,
      description,
      category,
    }`,
    { id }
  )
}
async function getByName(name: string): Promise<ProductMachineType[]> {
  const lowercasedName = name.toLowerCase()

  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[lower(name) match $lowercasedName]
    {
      _id,
      _createdAt,
      name,
      "mainImage": mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      description,
      category,
    }`,
    { lowercasedName }
  )
}
export { getProducts, getProduct, getMachines, getMachine, getByName }
