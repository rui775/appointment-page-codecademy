import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import { ContactsPage } from "../src/containers/contactsPage/ContactsPage";
import { ContactForm } from "../src/components/contactForm/ContactForm";
import { Tile } from "../src/components/tile/Tile";

describe("ContactsPage", () => {
    const contacts = [
        { name: 'John Doe', phone: '1234567890', email: 'john@example.com' },
        { name: 'Jane Smith', phone: '0987654321', email: 'jane@example.com' },
    ];

    const addContact = jest.fn();

    test("renders a contact", () => {
        render(<ContactsPage contacts={contacts} addContact={addContact} />);
        const contactElement = screen.getByText(/John Doe/);
        expect(contactElement).toBeInTheDocument();
    });

    test("renders form elements", () => {
        const setName = jest.fn();
        const setPhone = jest.fn();
        const setEmail = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <ContactForm
                name=""
                setName={setName}
                phone=""
                setPhone={setPhone}
                email=""
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />
        );

        const nameInput = screen.getByLabelText("Contact's Name:");
        const phoneInput = screen.getByLabelText("Contact's Phone Number:");
        const emailInput = screen.getByLabelText("Contact's Email:");
        const submitButton = screen.getByRole("button", { name: "Add Contact" });

        expect(nameInput).toBeInTheDocument();
        expect(phoneInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test("updates form fields", () => {
        const setName = jest.fn();
        const setPhone = jest.fn();
        const setEmail = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <ContactForm
                name=""
                setName={setName}
                phone=""
                setPhone={setPhone}
                email=""
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />
        );

        const nameInput = screen.getByLabelText("Contact's Name:");
        const phoneInput = screen.getByLabelText("Contact's Phone Number:");
        const emailInput = screen.getByLabelText("Contact's Email:");

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(phoneInput, { target: { value: "1234567890" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });

        expect(setName).toHaveBeenCalledWith("John Doe");
        expect(setPhone).toHaveBeenCalledWith("1234567890");
        expect(setEmail).toHaveBeenCalledWith("john@example.com");
    });

    test("submits form", () => {
        const setName = jest.fn();
        const setPhone = jest.fn();
        const setEmail = jest.fn();
        const handleSubmit = jest.fn();

        render(
            <ContactForm
                name="John Doe"
                setName={setName}
                phone="1234567890"
                setPhone={setPhone}
                email="john@example.com"
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />
        );

        const submitButton = screen.getByRole("button", { name: "Add Contact" });
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalled();
    });

    test("renders Tile component", () => {
        const name = "John Doe";
        const description = { phone: "1234567890", email: "john@example.com" };

        render(<Tile name={name} description={description} />);

        const nameElement = screen.getByRole("heading", { level: 2 });
        expect(nameElement).toHaveTextContent(name);

        const descriptionElements = screen.getAllByRole("heading", { level: 2 });
        expect(descriptionElements).toHaveLength(1);
    });

});
