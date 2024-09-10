"use client"
import { useState,ChangeEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "./ui/card"

export default function TipCalculator(){
    const [billAmount,setBillAmount] = useState<number|null>(null)
    const [tipPercentage,setTipPercentage] = useState<number|null>(null)
    const [tipAmount,setTipAmount] = useState<number>(0)
    const [totalAmount,setTotalAmount] = useState<number>(0)

    const handleBillAmountChange = (e:ChangeEvent<HTMLInputElement>):void=>{
        setBillAmount(parseFloat(e.target.value))
    }

    const handleTipPercentageChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTipPercentage(parseFloat(e.target.value))
    }

    const calculateTip = ():void =>{
        if(billAmount !== null && tipPercentage !== null){
            const tip = billAmount * (tipPercentage / 100)
            setTipAmount(tip)
            setTotalAmount(billAmount+tip);
        }
    }

    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle>Tip Calculator</CardTitle>
                    <CardDescription>
                        Enter the bill amount and tip percentage to calculate the tip and
                        total.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="bill-amount">Bill Amount</Label>
                        <Input
                        onChange={handleBillAmountChange}
                        value={billAmount !== null ? billAmount : ""}
                        type="number"
                        id="bill-amount"
                        placeholder="Enter bill amount"
                        />
                    </div>
                    <div className="grid  gap-2">
                        <Label htmlFor="tip-percentage">Tip Percentage</Label>
                        <Input
                        onChange={handleTipPercentageChange}
                        value={tipPercentage !== null ? tipPercentage : ""}
                        type="number"
                        id="tip-percentage"
                        placeholder="Enter tip percentage"
                        />
                    </div>
                    <Button onClick={calculateTip}>Calculate</Button>
                </CardContent>
                <CardFooter className="grid gap-2">
                    <div className=" flex items-center justify-between">
                        <span>Tip Amount:</span>
                        <span className="font-bold">${tipAmount.toFixed(2)}</span>
                    </div>
                    <div className=" flex items-center justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold">${totalAmount.toFixed(2)}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}