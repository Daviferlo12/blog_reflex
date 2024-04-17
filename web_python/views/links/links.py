import reflex as rx
from web_python.components.link_button import link_button
from web_python.components.title import title


def links() -> rx.Component:
    return rx.vstack (
        
        title("PRINCIPALES"), 
        link_button("Linkedln", 
                    "Informacion profecional en la plataforma linkedln", 
                    "https://www.linkedin.com/in/david-lopez69/"),
        
        link_button("GitHub", 
                    "Proyectos personales y academicos",
                    "https://github.com/Daviferlo12"),
        
        link_button("Portafolio", 
                    "Mi portafolio profecional donde alojo proyectoas de relevancia",
                    "#"),
        
        
        
        title("SEGUNDARIOS"),
        link_button("Spotify", 
                    "Mis gustos musicales",
                    "https://open.spotify.com/playlist/7MrXDFZZRXrkQCV5fB4z2H?si=4ac80250fb8d4b14"),
        
        link_button("Instagram", 
                    "Mi actividad en redes sociales",
                    "https://www.instagram.com"),
    
    
        
        title("CONTACTO"),
        
        link_button("Email", 
                    "daviferlo12@gmail.com",
                    "mailto:daviferlo12@gmail.com"),
        
        
        width= "100%",
        spacing="3"
    ) 