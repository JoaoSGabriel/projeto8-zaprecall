import InitialScreen from "./InitialScreen"

export default function App () {
    //const [dominy, setDominy] = React.useState("return (<InitialScrenn />);")

    // function initRecall () {
    //     setDominy("return (<GameScrenn />);")
    // }

    const dominy = <InitialScreen />
    return (
        <div>
            {dominy}
        </div>
    );
}