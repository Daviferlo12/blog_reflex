import reflex as rx
from enum import Enum
from .colors import Color
from .colors import text_color

# CONSTANTS
MAX_WIDTH = "600px"

# SIZES
class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"
    
# Styles

BASE_STYLE = {

    "background_color" : Color.BACKGROUND.value,
    
    rx.button: {
        "width" : "100%",
        "height" : "100%",
        "display" : "block",
        "padding" : Size.SMALL.value,
        "border_radius" : Size.DEFAULT.value,
        "background_color" : Color.CONTENT.value,
        "color" : text_color.HEADER.value,
        "_hover" : {
            "background_color" : Color.SECONDARY.value
        }
    },
    
    rx.link : {
        "text_decoration" : "none",
        "_hover" : {}
    }
}

title_style = dict(
    width = "100%",
    padding_top = Size.DEFAULT.value,
    color = text_color.HEADER.value
)

botton_title_style = dict(
    font_size = Size.DEFAULT.value,
    color = text_color.HEADER.value
)

botton_body_style = dict(
    font_size = Size.MEDIUM.value,
    color = text_color.BODY.value
)