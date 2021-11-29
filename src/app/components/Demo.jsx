import DockLayout from 'rc-dock';
import "rc-dock/dist/rc-dock.css";
import React from 'react';
import "./Demo.css";

const tab = {
    content: <div>Tab Content</div>,
    closable: true,
};

const _defaultLayout = {
    dockbox: {
        mode: 'horizontal',
        children: [
            {
                mode: 'vertical',
                size: 200,
                children: [
                    {
                        tabs: [{ ...tab, id: 't1', title: 'Tab 1' }, { ...tab, id: 't2', title: 'Tab 2' }],
                    },
                    {
                        tabs: [{
                            ...tab, id: 't3', title: 'Right to Left tests', content: (
                                <div>
                                    <input value="Textbox" className="rtl"></input>
                                    <br />
                                    <div className="rtl">
                                        <label for="cars">here's a different long string that should wrap</label>
                                    </div>
                                    <br />
                                    <br />

                                    <select name="cars" id="cars" className="rtl">
                                        <option value="volvo" className="rtl">Volvo</option>
                                        <option value="saab" className="rtl">Saab</option>
                                        <option value="mercedes" className="rtl">Mercedes</option>
                                        <option value="audi" className="rtl">Audi</option>
                                    </select>
                                </div>
                            ), minWidth: 150, minHeight: 150,
                        }, { ...tab, id: 't4', title: 'Tab 4' }],
                    },
                ]
            },
            {
                size: 1000,
                tabs: [
                    {
                        ...tab, id: 't5', title: 'basic demo', content: (
                            <div className="font-face-est">
                                This panel won't be removed from layout even when last Tab is closed
                            </div>
                        ),
                    }
                ],
                panelLock: { panelStyle: 'main' },
            },
            {
                size: 200,
                tabs: [{ ...tab, id: 't8', title: 'Tab 8' }],
            },
        ]
    },
    floatbox: {
        mode: 'float',
        children: [
            {
                tabs: [
                    { ...tab, id: 't9', title: 'Tab 9', content: <div>Float</div> },
                    { ...tab, id: 't10', title: 'Tab 10' }
                ],
                x: 300, y: 150, w: 400, h: 300
            }
        ]
    }
};

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DockLayout
                    defaultLayout={_defaultLayout}
                    style={{
                        position: "absolute",
                        left: 10,
                        top: 10,
                        right: 10,
                        bottom: 10,
                    }}
                />
            </header>
        </div>
    );
}

export default App;
