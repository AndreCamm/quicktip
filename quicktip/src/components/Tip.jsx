import React from "react"
import "./Tip.css"

const Tip = () => {
    const update = () => {
        let bill = document.getElementById("yourBill").value
        let tipPercent = document.getElementById("tipInput").value
        let split = document.getElementById("splitInput").value
        console.log({ bill, tipPercent, split })
    }

    return (
        <div>
            <main onInput={() => update()}>
                <h1>Quick Tip!</h1>

                <section>
                    <div className="bill">
                        <label for="">Bill</label>
                        <input
                            type="number"
                            placeholder="Your bill"
                            id="yourBill"
                        />
                    </div>
                    <div>
                        <div className="space-between">
                            <label for="">Select Tip</label>
                            <span id="tipPercent">0%</span>
                        </div>
                        <input
                            type="range"
                            defaultvalue="0"
                            id="tipInput"
                            className="range"
                        ></input>
                    </div>
                    <div className="space-between">
                        <span>Tip</span>
                        <span id="tipValue"></span>
                    </div>
                    <hr />
                    <div className="space-between total">
                        <span>Total</span>
                        <span id="totalWithTip"></span>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="space-between">
                            <label for="splitInput">Split</label>
                            <span id="splitValue"> 1 Person</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            defaultvalue="0"
                            id="splitInput"
                            className="range"
                        ></input>
                    </div>
                    <div className="space-between">
                        <span>Bill each</span>
                        <span id="billEach"></span>
                    </div>
                    <div className="space-between">
                        <span>Tip each</span>
                        <span id="tipEach"></span>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Tip
