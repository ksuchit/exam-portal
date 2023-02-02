import { screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Questions from "../component/Questions";


test('render questions', () => {
    <BrowserRouter>
       render(<Questions />)
    </BrowserRouter>
    const linkElement = within(screen.getByTestId('heading'))
    expect(linkElement('My Interview Portal')).toBeInTheDocument();
    // expect(linkElement).toBe('My Interview Portal');
  })