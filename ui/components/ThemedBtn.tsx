import { Pressable, StyleSheet } from 'react-native';
import type { PressableStateCallbackType } from 'react-native';
import type { ThemedBtnProps } from 'types';
import { colors } from 'styles/colors';


const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    btnPressed: {
        opacity: 0.8,
    },
});

export const ThemedBtn = ({ children, style, ...props}: ThemedBtnProps): React.JSX.Element => {
    const { btn, btnPressed } = styles

    const pressableStyle = (state: PressableStateCallbackType) => {
        const userStyle = typeof style === 'function' ? style(state) : style;
        return [btn, state.pressed && btnPressed, userStyle];
    };

    
	return (
		<Pressable
			style={pressableStyle}
            {...props}
		>
            {children}
        </Pressable> 
	);
};
