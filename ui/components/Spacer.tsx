import { View } from 'react-native';
import type { SpacerProps } from 'types';

export const Spacer = ({ width = '100%', height = 40, style }: SpacerProps) => {
    return (
        <View style={[{ width, height }, style]} />
    )
}

