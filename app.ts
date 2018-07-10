import { Application } from 'egg'
export default (app: Application) => {
  app.on('response', _ => {
    // console.log(app.plugins)
    // console.log('===================================')
  })
}
