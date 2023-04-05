import Paper from "./Paper";
import Button from "./Button";
import IconButton from "./IconButton";
import AppBar from "./Appbar";


export default function overdrives(theme) {
    return Object.assign(
        Paper(theme),
        Button(theme),
        IconButton(theme),
        AppBar(theme)

    )
}