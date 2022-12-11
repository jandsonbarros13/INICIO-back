function dedupe(list) {
    const lista = ['list1', 'list2', 'list3', 'list4','list4']
    const newList = [...new Set(lista)];
    return list;
  }
  
  module.exports = dedupe;
