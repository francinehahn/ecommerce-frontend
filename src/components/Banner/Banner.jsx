import React from "react"
import { Container, ScrollableArea } from "./style"
import { TbTruckDelivery, TbDiscount } from "react-icons/tb"
import { MdPayment } from "react-icons/md"
import { AiOutlineSafety } from "react-icons/ai"

export function Banner () {
    return (
        <Container>
            <ScrollableArea>
                <span>
                    <TbTruckDelivery/>
                    <div>
                        <h4>Frete grátis</h4>
                        <p>Acima de R$129,90</p>
                    </div>
                </span>

                <span>
                    <MdPayment/>
                    <div>
                        <h4>Até 12x sem juros</h4>
                        <p>Pagamento facilitado</p>
                    </div>
                </span>

                <span>
                    <TbDiscount/>
                    <div>
                        <h4>5% de desconto</h4>
                        <p>No boleto ou pix</p>
                    </div>
                </span>

                <span>
                    <AiOutlineSafety/>
                    <div>
                        <h4>Segurança</h4>
                        <p>Garantia LabEcommerce</p>
                    </div>
                </span>
            </ScrollableArea>
        </Container>
    )
}