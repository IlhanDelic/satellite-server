import app from './app';

const server = app.listen(app.get("port"), () => {
    console.log("app is running on http://crownstonehub-test.herokuapp.com/:%d in %s mode",
        app.get("port"),
        app.get("env")
    )

})

export default server;
