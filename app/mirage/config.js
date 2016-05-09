export default function() {
  this.get('/lists')
  this.get('/lists/:id', ['list', 'cards'])
}