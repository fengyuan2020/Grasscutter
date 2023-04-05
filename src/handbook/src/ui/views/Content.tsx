import React from "react";

import HomePage from "@pages/HomePage";
import CommandsPage from "@pages/CommandsPage";

import type { Page } from "@backend/types";

import "@css/views/Content.scss";
import { addNavListener, removeNavListener } from "@backend/events";

interface IProps {
    initial?: Page | null;
}

interface IState {
    current: Page;
}

class Content extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            current: props.initial ?? "Home"
        };
    }

    /**
     * Navigates to the specified page.
     *
     * @param page The page to navigate to.
     * @private
     */
    private navigate(page: Page): void {
        this.setState({ current: page });
    }

    componentDidMount() {
        addNavListener(this.navigate.bind(this));
    }

    componentWillUnmount() {
        removeNavListener(this.navigate.bind(this));
    }

    render() {
        switch (this.state.current) {
            default: return undefined;
            case "Home": return <HomePage />;
            case "Commands": return <CommandsPage />;
        }
    }
}

export default Content;
