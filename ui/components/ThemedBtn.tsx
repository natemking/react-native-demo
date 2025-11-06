import { Pressable } from 'react-native';
import type { PressableStateCallbackType } from 'react-native';
import type { ThemedBtnProps } from 'types';
import { globalStyles } from 'styles';

export const ThemedBtn = ({ children, style, ...props}: ThemedBtnProps): React.JSX.Element => {
    const { btn, btnPressed } = globalStyles

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
