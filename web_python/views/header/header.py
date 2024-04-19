import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size
from web_python.styles.colors import text_color
from web_python.styles.colors import Color
from web_python.components.link_icon import link_icon
from web_python.components.info_text import info_text

def header() -> rx.Component:
    return rx.vstack(
        
        rx.hstack(
            rx.avatar(
                fallback="DL",
                size="7",
                radius="full",
                src= "Avatar.png",
                color = text_color.BODY.value,
                bg = Color.BACKGROUND.value,
                border = "solid 4px",
                border_color=Color.SECONDARY.value
                ),
            
            rx.vstack(  
                rx.heading(
                    "DAVID LOPEZ",
                    size='7'
                    ),  
                rx.text(
                    "@daviferlo_",
                    margin_top="0px !important",
                    color = Color.PRIMARY.value
                    ),
                rx.hstack(
                    link_icon(
                        "icons/linkedin.svg",
                        "https://www.linkedin.com/in/david-lopez69/"),
                    link_icon(
                        "icons/github.svg",
                        "https://github.com/Daviferlo12"),
                    link_icon(
                        "icons/instagram.svg",
                        "https://www.instagram.com"),
                    
                        spacing= "4"
                    ),
                align_items="start",
                width = "100%"
            ),
            spacing= "4",
        ),
        
        rx.flex(
            info_text("+2", "Años de experiencia"),
            width="100%",
            align = "start"
        ),
        rx.text(
            """Joven entusiasta y proactivo con habilidades destacadas en comunicación, trabajo en equipo y resolución de problemas. Capacidad para aprender rápidamente, adaptarse a entornos cambiantes. Experiencia en desarrollo de soluciones web y soporte. Apasionado por mejorar mis habilidades en el desarrollo de software, y dispuesto a asumir desafíos que me permitan crecer profesionalmente. ¡Bienvenid@!""",
            color = text_color.BODY.value,
            font_size = Size.MEDIUM.value
            ),
        spacing= "4",
        align_items = "start"
    )