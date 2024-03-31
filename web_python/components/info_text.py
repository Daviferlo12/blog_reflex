import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size
from web_python.styles.colors import text_color
from web_python.styles.colors import Color

def info_text(title : str, body : str) -> rx.Component:
    return rx.box(
        rx.chakra.span(
            title, 
            font_weight="bold", 
            color= Color.PRIMARY.value
            
            ),
        
        f" {body}", font_size = Size.MEDIUM.value,
        color = text_color.BODY.value
    )