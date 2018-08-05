import { h, render, FunctionalComponent } from 'preact';

interface Props {}

const App: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div>hello world</div>
    )
};

const node = document.getElementById('root') as Element;

render(<App/>, node);