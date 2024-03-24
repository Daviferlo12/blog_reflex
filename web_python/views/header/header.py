import reflex as rx 

def header() -> rx.Component:
    return rx.vstack(
        
        rx.hstack(
            rx.avatar(fallback="RX", size="5"),
            rx.vstack(
                rx.heading(
                    "DAVID LOPEZ", 
                    size="5"
                    ),
                
                rx.text(
                    "@daviferlo_",
                    margin_top="0px !important"
                    ),
                align_items="start",
                width = "100%"
            )
        ),

        rx.text("""Joven entusiasta y proactivo con habilidades destacadas en comunicación, trabajo en equipo y resolución de problemas. Capacidad para aprender rápidamente, adaptarse a entornos cambiantes. Experiencia en desarrollo de soluciones web y soporte. Apasionado por mejorar mis habilidades en el desarrollo de software, y dispuesto a asumir desafíos que me permitan crecer profesionalmente. ¡Bienvenid@!"""),
        align_items = "start"
    )