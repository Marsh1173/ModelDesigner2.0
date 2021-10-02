import React from "react";
import "./TextInputStyles.less";

export class TextInput extends React.Component<TextInputProp, {}> {
    constructor(props: TextInputProp) {
        super(props);

        this.handleFocusOut = this.handleFocusOut.bind(this);
    }

    handleFocusOut(event: React.FocusEvent<HTMLTextAreaElement>) {
        this.props.onChange(event.target.value);
    }

    verifyInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.value.indexOf("\n") != -1) {
            event.target.value = event.target.value.substring(0, event.target.value.length - 1);
            event.target.blur();
        }
    }

    render() {
        return (
            <div className="TextInput">
                <textarea defaultValue={this.props.initValue} onBlur={this.handleFocusOut} onChange={this.verifyInput} />
            </div>
        );
    }
}

export interface TextInputProp {
    initValue: string;
    onChange: (value: string) => void;
}