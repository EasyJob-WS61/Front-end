// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'

let lightTheme, darkTheme;
lightTheme = {
    dark: false,
    colors: {
        primary: '#01C4FF',
        secondary: '#02EDB3',
        error: '#FF5A5A',
        info: '#01C4FF',
        success: '#02EDB3',
        warning: '#FB8C00',
        white: '#FFFFFF',
        black: '#8C8C8C',
        background: '#FFFFFF',
    }
};

darkTheme = {
    dark: true,
    colors: {
        primary: '#01C4FF',
        secondary: '#02EDB3',
        error: '#FF5A5A',
        info: '#01C4FF',
        success: '#02EDB3',
        warning: '#FB8C00',
        white: '#FFFFFF',
        black: '#7D7979',
        background: '#242424'
    }
};

export default createVuetify({
    theme: {
        defaultTheme: lightTheme,
        themes: {
            lightTheme, darkTheme
        }
    }
})
