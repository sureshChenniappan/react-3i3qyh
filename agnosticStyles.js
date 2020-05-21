import React from 'react'
import styled from 'styled-components';
import getComponent from './createComponentFactory';

export default styled(
    ({tags = {}, children, ...props}) => {
        //detecting platform
        const isReact = typeof document !== 'undefined';
        const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
        //check when we can use the Platform.OS when integrating with build system

        let tag = isReact ? tags.react : isReactNative && tags.reactNative;
        if(isReact){
            tag = tags.react;
        }
        if(isReactNative) {
            tag = getComponent(tags.reactNative);
        }
        console.log(isReact, isReactNative, tags); 
        //console.log("props : " + JSON.stringify(props))
        return React.createElement(tag, props, children)
    }
)
