import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import { Company } from "../company/Company";

test('company rendered successfully', async () => {
    () => render(<Company url="/company" />)
})
