import app from './app';

const server = app.listen(app.get("port"), () => {
    console.log("app is running %d in %s mode",
        app.get("port"),
        app.get("env")
    )

})

export default server;
