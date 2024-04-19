export const fetchBySearch = async (search) => {
  const response = await fetch(`/api/product?q=${search}`)

  if (!response.ok) throw new Error("Error: Search: ")

  return response.json()
}