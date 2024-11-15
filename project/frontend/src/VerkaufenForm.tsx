import React, { useState } from 'react';

const VerkaufenForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        marke: '',
        modell: '',
        baujahr: '',
        kilometerstand: '',
        kraftstoff: '',
        leistung: '',
        getriebe: '',
        preis: '',
        beschreibung: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="verkaufen-form-container">
            <h2 className="verkaufen-title">Fahrzeug verkaufen</h2>

            <div className="step-indicator">
                <div className="step">
                    <div className="step-number">{step}</div>
                    <div className="step-title">
                        {step === 1 ? 'Fahrzeugdaten' : step === 2 ? 'Bilder' : 'Kontaktdaten'}
                    </div>
                </div>
            </div>

            {step === 1 && (
                <div>
                    <div>
                        <label>Marke *</label>
                        <input type="text" name="marke" value={formData.marke} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Modell *</label>
                        <input type="text" name="modell" value={formData.modell} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Baujahr *</label>
                        <input type="text" name="baujahr" value={formData.baujahr} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Kilometerstand *</label>
                        <input type="text" name="kilometerstand" value={formData.kilometerstand} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Kraftstoff *</label>
                        <select name="kraftstoff" value={formData.kraftstoff} onChange={handleChange} required>
                            <option value="">Bitte auswählen</option>
                            <option value="Benzin">Benzin</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Elektro">Elektro</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label>Leistung *</label>
                        <input type="text" name="leistung" value={formData.leistung} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Getriebe *</label>
                        <select name="getriebe" value={formData.getriebe} onChange={handleChange} required>
                            <option value="">Bitte auswählen</option>
                            <option value="Manuell">Manuell</option>
                            <option value="Automatik">Automatik</option>
                        </select>
                    </div>
                    <div>
                        <label>Preiswunsch *</label>
                        <input type="text" name="preis" value={formData.preis} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Beschreibung</label>
                        <textarea name="beschreibung" value={formData.beschreibung} onChange={handleChange} />
                    </div>
                    <button type="button" onClick={nextStep}>Weiter</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h3>Bilder</h3>
                    {/* Hier kannst du ein Bild-Upload-Feld hinzufügen */}
                    <button type="button" onClick={prevStep}>Zurück</button>
                    <button type="button" onClick={nextStep}>Weiter</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h3>Kontaktdaten</h3>
                    {/* Hier kannst du die Kontaktfelder hinzufügen */}
                    <button type="button" onClick={prevStep}>Zurück</button>
                    <button type="submit">Absenden</button>
                </div>
            )}
        </div>
    );
};

export default VerkaufenForm;
