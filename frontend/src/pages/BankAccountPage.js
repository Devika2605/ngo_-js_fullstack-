import React, { useState } from 'react';
import BankAccountForm from '../components/BankAccount/BankAccountForm';
import BankAccountList from '../components/BankAccount/BankAccountList';

const BankAccountPage = () => {
    const [editAccount, setEditAccount] = useState(null);

    const handleSave = () => {
        setEditAccount(null);
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <BankAccountForm account={editAccount} onSave={handleSave} />
            <BankAccountList onEdit={setEditAccount} />
        </div>
    );
};

export default BankAccountPage;
