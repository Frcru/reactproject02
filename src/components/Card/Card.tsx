import { ReactNode } from "react"

interface cardProps {
    value: string;
    pale: string;    
}

export const Card = ({value,pale}:cardProps) => {
    return (
        <div className="card-container">
            <div className="palo">
                {pale}
            </div>
            <div className="number">
                {value}
            </div>
            <div className="palo">
                {pale}
            </div>
        </div>
    )
}