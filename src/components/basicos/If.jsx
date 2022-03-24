// Não precisa importar React pq não usa nada do react, apenas js

export default function (props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}


