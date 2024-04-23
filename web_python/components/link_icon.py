import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size

def link_icon(image_icon : str, url : str, alt : str) -> rx.Component:
    return rx.link(
        rx.image(
            src = image_icon,
            width = Size.DEFAULT.value,
            alt = alt
        ),
        href = url,
        is_external= True 
    )