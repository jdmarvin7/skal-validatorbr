# Skal - ValidatorBr

Pacote TypeScript(Angular) para validação de documentos br.

#### Para instalar o pacote:
    npm install skal-validatorbr

#### Como usar
    1. Vamos adicionar o modulo

    import { SkalValidatorbrModule } from 'skal-validatorbr'

    @NgModule({
      imports: [
        SkalValidatorbrModule,
      ]
    })

    2. Vamos adicionar a nossa diretiva no input que queremos validar [appCpfCnpjValidate].

    ex:

    <html>
      <input formControlName="input" appCpfCnpjValidate/>
      <div *ngIf="form.controls['input'].hasError('digit') && form.controls['input'].hasError('equalDigits')">
        CPF ou CNPJ não válido.
      </div>
    </html>
