export default function() {
  this.get('/lists', 'lists')
  this.get('/lists/:id', ['list', 'cards'])
  // this.post('/cards', 'cards');
  
}