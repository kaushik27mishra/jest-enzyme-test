import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'
import {findByTestAttr} from '../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component;
}

describe('Headline Component', () => {

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props={
                header:"Test Header",
                desc:"Test Desc"
            }
            wrapper=setUp(props);
        })
        
        it("Should render without errors", () => {
            const component=findByTestAttr(wrapper,'HeadlineComponent')
            expect(component.length).toBe(1);
        })

        it("Should render a H1", () => {
            const component=findByTestAttr(wrapper,'header')
            expect(component.length).toBe(1);
        })

        it("Should render a description", () => {
            const component=findByTestAttr(wrapper,'desc')
            expect(component.length).toBe(1);
        })

    })

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper=setUp();
        })

        it("Should not render", () => {
            const component=findByTestAttr(wrapper,'HeadlineComponent')
            expect(component.length).toBe(0);
        })

    })
    
    
    
})


