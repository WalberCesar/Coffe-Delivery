import { ContainerIntro, TextIntro, TitleIntro, ItemsIntro, ImageIntro, IconCart, IconCoffe, IconPackage, IconTimer, DivInline } from "./style";
import introImg from '../../assets/introimg.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from "styled-components";

export function IntroHome () {

    const theme = useTheme();

    return (
        <ContainerIntro>
            
            <TextIntro>
                <TitleIntro>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleIntro>

                <ItemsIntro>
                    <DivInline>
                        <div>
                            <IconCart>
                                <ShoppingCart color={theme.white} weight="fill" />
                            </IconCart>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <IconPackage >
                                <Package color={theme.white} weight="fill"/>
                            </IconPackage>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                    </DivInline>
                    
                    <DivInline>
                        <div>
                            <IconTimer>
                                <Timer color={theme.white} weight="fill"  />
                            </IconTimer>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <IconCoffe >
                                <Coffee color={theme.white} weight="fill"/>
                            </IconCoffe>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </DivInline>
                    
                </ItemsIntro>
            </TextIntro>

            <ImageIntro src={introImg}/>
        </ContainerIntro>
    )
}