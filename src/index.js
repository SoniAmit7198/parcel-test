import "./styles/index.scss"

console.log("is work")

const obj = {
    a:"apple",
    b:"butter",
    c:{
        cd:"cheese"
    },
};

console.log(obj?.c?.cd , obj?.f?.fa )

if (module.hot){
    module.hot.accept
}