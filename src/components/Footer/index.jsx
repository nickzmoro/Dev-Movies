import { FooterBox, MadeBy, BackToTop } from './styles.js'
import { HiArrowSmUp } from 'react-icons/hi';

export function Footer() {
    return (
        <FooterBox>

            <MadeBy>
                <h2><span>&lt;/&gt;</span> Feito por Nicolas Moro <span>&lt;/&gt;</span></h2>
            </MadeBy>

            <BackToTop>
                <a href="#">
                    <HiArrowSmUp size={20}/>
                </a>
            </BackToTop>

        </FooterBox>
    )
}