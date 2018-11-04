
/*
fﬁends view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the fﬁends view has a status bar located at the very-top in the center of the view
fﬁends view has Navigation Bar located at the very-top across the full width of the view
fﬁends view has Navigation Bar located at the very-top across the full width of the view
fﬁends view has Label located at the top left of the view, text needs identified
fﬁends view has Label located at the top center of the view, text needs identified
fﬁends view has Label located at the top center of the view, text needs identified
fﬁends view has Label located at the top left of the view, text needs identified
fﬁends view has Label located at the top center of the view, text needs identified
fﬁends view has Label located at the top center of the view, text needs identified
fﬁends view has Label located at the top center of the view, text needs identified
fﬁends view has Label located at the main area center of the view, text needs identified
fﬁends view has Label located at the main area left of the view, text needs identified
fﬁends view has Label located at the main area left of the view, text needs identified
fﬁends view has Label located at the main area center of the view, text needs identified
fﬁends view has Label located at the main area center of the view, text needs identified
fﬁends view has Label located at the main area center of the view, text needs identified
fﬁends view has Label located at the main area left of the view, text needs identified
fﬁends view has an Image located at the main area left of the view. this is a placeholder and should be updated with higher resolution Image
fﬁends view has an Image located at the main area left of the view. this is a placeholder and should be updated with higher resolution Image
fﬁends view has Label located at the mid-bottom left of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the mid-bottom left of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the mid-bottom center of the view, text needs identified
fﬁends view has Label located at the bottom left of the view, text needs identified
fﬁends view has Active Label located at the bottom center of the view, text for button needs identified
fﬁends view has Active Label located at the bottom left of the view, text for button needs identified

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
        
        
        import {  }  from '../actions/fﬁendsActions.js'; 

        import { me_get__data }  from '../actions/fﬁendsActions.js'; 
        
       
        class fﬁendsView extends React.Component {

            state = {
                
                
            }
    
                
            
        me_get__data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for me_get__data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { me_get__data } = this.props
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-white-standard" light expand="md"> 
    <NavbarBrand>fﬁends</NavbarBrand> 
</Navbar> 
<Navbar color="light navigation-bar-white-standard" light expand="md"> 
    <NavbarBrand>e friends q</NavbarBrand> 
</Navbar> 
			<Col md={12}>
				<p className="label-block-very-light-green-small"> o radley obrien angela grifﬁn </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> angela grifﬁn </p>
			</Col>

			<Col md={12}>
				<p className="label-gray-white"> radley obrien </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> architect art director </p>
			</Col>

			<Col md={12}>
				<p className="label-block-white"> architect </p>
			</Col>

			<Col md={12}>
				<p className="label-light-pink-block"> art director </p>
			</Col>

			<Col md={12}>
				<p className="label-block-white-small"> sabina phillips 0 jack blair </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> sabina phillips </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> cartoonist copywritel </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> copywriter </p>
			</Col>

			<Col md={12}>
				<p className="label-block-white"> cartoonist </p>
			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-turquoise-very-light-green-small"> a </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> lagina mccarty </p>
			</Col>

			<Col md={12}>
				<p className="label-block-very-light-green"> i </p>
			</Col>

			<Col md={12}>
				<p className="label-dark-green-dark-green-small"> 0 </p>
			</Col>

			<Col md={12}>
				<p className="label-light-pink-gray-small"> editor illustrator </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> illustramr </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender"> editor </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> illustrator </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for ._n.4_um... button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.._n.4_um...()}>. n.4 um...</Button> 

			</Col>

			<Col md={12}>
				<p className="label-white-standard"> n.4 um.-- </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for n_|_____n...:. button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.n_|_____n...:.()}>n |     n...:.</Button> 

			</Col>


                        {render_me_get__data()}
   
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({  me_get__data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(fﬁendsView);
    
        