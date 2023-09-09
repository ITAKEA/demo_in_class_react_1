
export default function MyComponent(props){
    console.log(props)

    return (
        <div>Hello {props.msg} {props.name}</div>

    );
} 