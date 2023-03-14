export const filterWareHouseBasedOnSearch = (data, searchText) =>{
  return data.filter(({name}) =>  name.toLowerCase().includes(searchText.toLowerCase()))

}


