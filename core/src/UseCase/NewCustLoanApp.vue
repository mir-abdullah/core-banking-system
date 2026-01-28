<template>
    <Accordion class="accordianClass" multiple v-model:value="activeNames">
        <AccordionPanel v-if="accountInfo" value="0" ref="panel0">
            <AccordionHeader>1. Account Information</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12">
                        <!-- Label -->
                        <div class="col-span-3">
                            <h4 class="font-semibold">
                                Are you an account holder ?
                                <span class="text-red-600">*</span>
                            </h4>
                        </div>

                        <!-- Input -->
                        <div class="col-span-5">
                            <RadioButton name="AccountHolderRadioButton" :options=RadioBtnYesNoList
                                :modelValue=isAccountHolder label="" @radio-button-on-change="accountHolderOnChange" />

                        </div>


                    </div>

                    <div v-if="isAccountHolder == 'no'" class="info-box">
                        <div class="info-header">
                            <span class="info-icon">ℹ️</span>
                            <div>
                                <strong>Disclaimer</strong>
                                <p>
                                    <b>For loan application request, you are required to provide account opening
                                        details also in following application form.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="grid grid-cols-12 mt-4">
                        <div class="col-span-8">
                            <TextBox name="AccountNumberTextBox" label="Account number or IBAN" dataType="Numeric"
                                maxLength=25 :mandatory=true mask="****-****-******-**-*" :modelValue=accountNumberValue
                                labelColor="var(--primary-color)" @text-box-on-key-up="AccountNumberTextBox" />
                        </div>
                    </div>
                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12">
                        <div class="col-span-10"></div>
                        <div class="col-span-2">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                :isDisabled=isNextButtonDisabled @button-on-click="nextButton" />

                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="verification" value="1" ref="panel1">
            <AccordionHeader>2. Verification</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <!-- //////////////////////////////// -->
                    <div v-if="isAccountHolder == 'no'" class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="mobileNoTextBox" label="Enter Mobile Number" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=mobileNo
                                @text-box-on-key-up="mobileNoTextBox" />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="emailAddressTextBox" label="Enter Email Address"
                                dataType="alphaNumericSpecial" maxLength=12 :mandatory=true :modelValue=emailAddress
                                @text-box-on-key-up="emailAddressTextBox" />

                        </div>
                        <div class="col-span-2">
                            <Button label="Send OTP" backgroundColor="var(--primary-color)" name="sendOTPButton"
                                :isDisabled="isSendOTPButtonDisabled" @button-on-click="sendOTPButton" />

                        </div>
                    </div>
                    <!-- //////////////////////////////// -->


                    <div v-if="OTPFlag || isAccountHolder == 'yes'">
                        <!-- //////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-1">
                            </div>
                            <div class="col-span-10">
                                <h4>
                                    <b>A verification code has been sent to your registered email address and mobile
                                        number. Please enter the 6-digit code to proceed with your application.</b>
                                </h4>
                            </div>
                        </div>
                        <div class="info-box">
                            <div class="info-header">
                                <span class="info-icon">ℹ️</span>
                                <div>
                                    <strong>Example: XXX XXX</strong>
                                    <p>
                                        XXX - First 3 digits received on SMS
                                        XXX - Last 3 digits received on Email
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="icon-circle">
                                <i class="pi pi-mobile"></i>
                            </span>

                            <span class="text-sm text-gray-700">
                                +92******4099
                            </span>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="icon-circle">
                                <i class="pi pi-envelope"></i>
                            </span>
                            <span class="icon-text">izz****@xyz.com</span>
                        </div>

                        <!-- //////////////////////////////// -->

                        <div class="justify-start">
                            <InputOtp v-model="InputOtpValue" class="flex justify-start"
                                inputClass="border-2 focus:border-green-500 focus:ring-0" :length="6"
                                :disabled="timeLeft === 0" />
                        </div>

                        <div class="mt-4">
                            <p>
                                Didn't receive code?
                                <span class="text-blue-600 cursor-pointer hover:underline" @click.stop="onResendClick">
                                    Resend
                                </span>
                            </p>
                        </div>

                        <span>{{ formattedTime }}</span>
                        <!-- //////////////////////////////// -->

                    </div>
                </fieldset>
                <div v-if="OTPFlag || isAccountHolder == 'yes'">
                    <fieldset>
                        <div class="grid grid-cols-12">
                            <div class="col-span-10"></div>
                            <div class="col-span-2">
                                <Button label="Verify" backgroundColor="var(--primary-color)" name="verifyButton"
                                    :isDisabled="verifyButtonDisabled" @button-on-click="verifyButton" />

                            </div>
                        </div>
                    </fieldset>
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="AcPersonalDetails" value="2" ref="panel2">
            <AccordionHeader>3. Account / Personal Details</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="IdentificationTypeDropDown" label="Identification Type" :mandatory=true
                                :modelValue=identificationType :optionsList=identificationTypesList
                                @dropdown-on-change="IdentificationTypeDropDown" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="cnicPassportNumberTextBox" label="CNIC / Passport Number" dataType="Numeric"
                                maxLength=25 :mandatory=true mask="*****-*******-*" :modelValue=cnicNo
                                @text-box-on-key-up="cnicPassportNumberTextBox" />
                        </div>
                        <div class="col-span-2">
                            <Button label="Fetch Details" backgroundColor="var(--primary-color)" name="fetchButton"
                                :isDisabled="isFetchButtonDisabled" @button-on-click="FetchButton" />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-8">
                            <TextBox name="fullNameTextBox" label="Full Name (as per CNIC)" dataType="alphabetsOnly"
                                :isDisabled=true maxLength=25 :mandatory=true :modelValue=fullName />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="cnicPassportIssueDateTextBox" label="CNIC / Passport Issue Date"
                                :isDisabled=false dataType="Numeric" maxLength=10 :mandatory=true
                                :modelValue=cnicIssueDate mask="**/**/****" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="cnicExpiryDateTextBox" label="CNIC / Passport Expiry Date" dataType="Numeric"
                                :isDisabled=true maxLength=10 :mandatory=true :modelValue=cnicExpiryDate
                                mask="**/**/****" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="ntnNumberTextBox" label="NTN Number" dataType="Numeric" maxLength=10
                                :isDisabled=true :mandatory=true :modelValue=ntnNumber />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <Dropdown name="salutationDropDown" label="Salutation" :mandatory=false
                                :modelValue=salutation :optionsList=salutationList
                                @dropdown-on-change="salutationDropDown" />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="qualificationDropDown" label="Educational Qualification" :mandatory=true
                                :modelValue=qualification :optionsList=qualificationList
                                @dropdown-on-change="qualificationDropDown" />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="maritalStatusDropDown" label="Marital Status" :mandatory=true
                                :modelValue=maritalStatus :optionsList=maritalStatusList
                                @dropdown-on-change="maritalStatusDropDown" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="dateOfBirthTextBox" label="Date of Birth" dataType="Numeric" maxLength=10
                                :isDisabled=true :mandatory=false :modelValue=ntnNumber mask="**/**/****" />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <RadioButton name="fatherSpouseRadioButton" :options=fatherSpouseRadioBtnList
                                :modelValue=fatherSpouseRadioBtn label=""
                                @radio-button-on-change="fatherSpouseRadioBtnOnChange" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="fatherSpouseNameTextBox" label="Father / Spouse Name"
                                dataType="alphabetsOnly" maxLength=30 :mandatory=true :modelValue=fatherSpouseName />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="motherNameTextBox" label="Mother Name" dataType="alphabetsOnly" maxLength=30
                                :isDisabled=true :mandatory=true :modelValue=motherName />
                        </div>
                    </div>

                </fieldset>
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Family Information</h3>
                    </div>
                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-2">
                            <label for="">Number of Dependents <span class="text-red-600">*</span> </label>
                        </div>
                        <div class="col-span-3">
                            <TextBox name="childrenTextBox" label="Children" dataType="Numeric" maxLength=30
                                :mandatory=false :modelValue=children />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="childrenTextBox" label="Others" dataType="Numeric" maxLength=12
                                :mandatory=false :modelValue=otherDependent />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="otherPhoneNoTextBox" label="Other Phone Number" dataType="Numeric"
                                maxLength=12 :mandatory=true :modelValue=otherPhoneNo mask="****-*******" />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="nextOfKinTextBox" label="Next of Kin" dataType="alphaNumericSpecial"
                                maxLength=30 :mandatory=true :modelValue=nextOfKin />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="nextOfKinRelationTextBox" label="Next of Kin Relation"
                                dataType="alphabetsOnly" maxLength=30 :mandatory=true :modelValue=nextOfKinRelation />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="nextOfKinCnicTextBox" label="Next of Kin CNIC" dataType="Numeric"
                                maxLength=17 :mandatory=true :modelValue=nextOfKinCnic mask="*****-*******-*" />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <TextBox name="nextOfKinAddressTextBox" label="Next of Kin Address"
                                dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                :modelValue=nextOfKinAddress />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <label>
                                Do you have a vehicle? <span class="text-red-600">*</span>
                            </label>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="haveVehicleRadioButton" :options=RadioBtnYesNoList
                                :modelValue=haveVehicle label=""
                                @radio-button-on-change="haveVehicleRadioButtonOnChange" />
                        </div>
                        <div v-if="haveVehicle == 'yes' ? true : false" class="col-span-3">
                            <TextBox name="vehicleModelTextBox"
                                label="If yes, Enter Make, Model and Registration Number" dataType="alphaNumericSpecial"
                                maxLength=12 :mandatory=true :modelValue=vehicleModel />
                        </div>
                        <div v-if="haveVehicle == 'yes' ? true : false" class="col-span-3">
                            <Dropdown name="vehicleStatusDropDown" label="Vehicle Status" :mandatory=true
                                :modelValue=vehicleStatus :optionsList=vehicleStatusList />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <label>
                                Mode of Communication by Bank <span class="text-red-600">*</span>
                            </label>
                        </div>
                        <div class="col-span-4" :lg="3">
                            <RadioButton name="bankModeOfCoomunicationRadioButton" :options=bankModeOfCoomunicationList
                                :modelValue=bankModeOfCoomunication label=""
                                @radio-button-on-change="bankModeOfCoomunicationOnChange" />
                        </div>
                    </div>
                </fieldset>
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Account Information</h3>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="purposeOfAccountDropDown" label="Purpose of Account" :mandatory=true
                                :modelValue=purposeOfAccount :optionsList=purposeOfAccountList
                                @dropdown-on-change="purposeOfAccountDropDown" />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="accountCategoryDropDown" label="Account Category" :mandatory=true
                                :modelValue=accountCategory :optionsList=accountCategoryList
                                @dropdown-on-change="accountCategoryDropDown" />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="currencyDropDown" label="Currency" :mandatory=true :modelValue=currency
                                :optionsList=currencyList @dropdown-on-change="currencyDropDown" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-2">
                            <label>
                                Cheque Book Required <span class="text-red-600">*</span>
                            </label>
                            <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="chequeBookRequiredRadioButton" :options=RadioBtnYesNoList
                                :modelValue=chequeBookRequired label=""
                                @radio-button-on-change="chequeBookRequiredRadioButton" />
                        </div>
                        <!-- ///////////////////////////// -->
                        <div class="col-span-2">
                            <label>
                                e-Statement Required <span class="text-red-600">*</span>
                            </label>
                            <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="estatementRequiredRadioButton" :options=RadioBtnYesNoList
                                :modelValue=estatementRequired label=""
                                @radio-button-on-change="estatementRequiredRadioButton" />
                        </div>
                        <!-- ///////////////////////////////////// -->
                        <div class="col-span-2">
                            <label>
                                SMS Alert Required <span class="text-red-600">*</span>
                            </label>
                            <div class="text-red-500 text-xs">(Charges Applied: Rs.700)</div>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="smsAlertRadioButton" :options=RadioBtnYesNoList :modelValue=smsAlert
                                label="" @radio-button-on-change="smsAlertRadioButton" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <label>
                                Are you a PEP?(Political Exposed Person) <span class="text-red-600">*</span>
                            </label>
                        </div>
                        <div class="col-span-4" :lg="10">
                            <RadioButton name="isPepRadioButton" :options=PepList :modelValue=isPep label=""
                                @radio-button-on-change="isPepRadioButton" />
                        </div>
                    </div>

                    <!-- ///////////////////////////// -->
                    <!--<div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4" >
                            <dropdown v-model="salutation2" :options="salutationList2" label="Salutation" />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="fullname2" label="Full Name (as per CNIC) *"
                                placeholder="Full Name (as per CNIC)" />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="cnicNo2" type="mask" mask="9999-9999999" max-length="12"
                                label=" CNIC Number *" placeholder="CNIC Number " />
                        </div>
                        <div class="col-span-4" >
                            <textbox v-model="cnicIssueDate2" type="mask" mask="99/99/9999"
                                label="CNIC / Passport Issue Date *" placeholder="CNIC / Passport Issue Date *" />
                        </div>
                    </div>
                    -->
                    <!-- ///////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <!-- <div class="col-span-4" >
                            <textbox v-model="cnicExpiryDate2" type="mask" mask="99/99/9999"
                                label="CNIC / Passport Expiry Date *" placeholder="CNIC / Passport Expiry Date *" />
                        </div> -->
                        <div class="col-span-4">
                            <Dropdown name="modeOfTransactionDropDown" label="Mode of Transaction" :mandatory=true
                                :modelValue=modeOfTransaction :optionsList=modeOfTransactionList
                                @dropdown-on-change="modeOfTransactionDropDown" />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="deliveryChannelsDropDown" label="Delivery Channels" :mandatory=true
                                :modelValue=deliveryChannels :optionsList=deliveryChannelsList
                                @dropdown-on-change="deliveryChannelsDropDown" />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="highestBalanceTextBox" label="Highest Balance" dataType="Numeric"
                                maxLength=20 :mandatory=true :modelValue=highestBalance
                                @text-box-on-blur="highestBalanceTextBox" />
                        </div>
                    </div>

                    <!-- ///////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">

                        <div class="col-span-4">
                            <TextBox name="depositPerMonthTextBox" label="Deposit per Month" dataType="Numeric"
                                maxLength=20 :mandatory=true :modelValue=depositPerMonth
                                @text-box-on-blur="depositPerMonthTextBox" />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="NumberOfDepositPerMonthDropDown" label="Number of Deposits per Month"
                                :mandatory=true :modelValue=NumberOfDepositPerMonth
                                :optionsList=NumberOfDepositPerMonthList
                                @dropdown-on-change="NumberOfDepositPerMonthDropDown" />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="NumberOfWithdrawalPerMonthDropDown" label="Number of withdrawals per Month"
                                :mandatory=true :modelValue=NumberOfWithdrawalPerMonth
                                :optionsList=NumberOfWithdrawalPerMonthList
                                @dropdown-on-change="NumberOfWithdrawalPerMonthDropDown" />

                        </div>
                    </div>
                    <!-- //////////////////////////////// -->

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <label><b>Are you a U.S Citizen ? <span class="text-red-600">*</span> </b>
                            </label>
                        </div>
                        <div class="col-span-4">
                            <RadioButton name="USCitizenRadioButton" :options=RadioBtnYesNoList :modelValue=USCitizen
                                label="" @radio-button-on-change="USCitizenRadioButton" />
                        </div>
                    </div>

                    <div v-if="USCitizen == 'yes' ? true : false">
                        <!-- //////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Are you a U.S Card Holder ? <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="USCardHolderRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=USCardHolder label=""
                                    @radio-button-on-change="USCardHolderRadioButton" />
                            </div>
                            <!-- //////////// -->
                            <div class="col-span-5">
                                <label>Are you a U.S Resident for tax purposes ? <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="USResidentTaxPurposeRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=USResidentTaxPurpose label=""
                                    @radio-button-on-change="USResidentTaxPurposeRadioButton" />
                            </div>
                            <!-- //////////// -->
                            <div class="col-span-5">
                                <label>(a)- Were you born in the U.S ? <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="USBornRadioButton" :options=RadioBtnYesNoList :modelValue=USBorn
                                    label="" @radio-button-on-change="USBornRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>(b)- Were you born outside the U.S to U.S Citizen/s ? <span
                                        class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="outsideUSBornRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=outsideUSBorn label=""
                                    @radio-button-on-change="outsideUSBornRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Does the Required identity document have a U.S address or mention "Country of
                                    Stay" as U.S ? <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="CountryOfStayRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=CountryOfStay label=""
                                    @radio-button-on-change="CountryOfStayRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Does the Account Holder / Mandate Holder have a U.S telephone Number ? <span
                                        class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="USTelephoneNoRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=USTelephoneNo label=""
                                    @radio-button-on-change="USTelephoneNoRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Will there be standing instructions to transfer funds to an account in ths U.S or
                                    directions regularly received from a U.S address ? <span
                                        class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="standingInstructionsRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=standingInstructions label=""
                                    @radio-button-on-change="standingInstructionsRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Does the Account have a U.S mailing address, including a U.S P.O Box ? <span
                                        class="text-red-600">*</span> </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="USMailingAddressRadioButton" :options=RadioBtnYesNoList
                                    :modelValue=USMailingAddress label=""
                                    @radio-button-on-change="USMailingAddressRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-5">
                                <label>Does the Account have "Hold Mail" address or an "in care of" address that is the
                                    sole
                                    address provided for this account ? <span class="text-red-600">*</span> </label>
                            </div>
                            <div class="col-span-4">
                                <RadioButton name="HoldMailRadioButton" :options=RadioBtnYesNoList :modelValue=HoldMail
                                    label="" @radio-button-on-change="HoldMailRadioButton" />
                            </div>
                        </div>

                        <!-- ///////////////////////////// -->
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-6">
                                <TextBox name="TaxIdenNumberTextBox" label="Tax Identification Number"
                                    dataType="Numeric" maxLength=20 :mandatory=true :modelValue=TaxIdenNumber />
                            </div>
                        </div>
                    </div>
                    <!-- ///////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-5">
                            <label><b>Are you a tax resident of a country other than U.S and Pakistan ? <span
                                        class="text-red-600">*</span> </b></label>
                        </div>
                        <div class="col-span-4">
                            <RadioButton name="TaxResidentCountryRadioButton" :options=RadioBtnYesNoList
                                :modelValue=TaxResidentCountry label=""
                                @radio-button-on-change="TaxResidentCountryRadioButton" />
                        </div>
                    </div>

                    <!-- ///////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4" v-if="TaxResidentCountry == 'yes' ? true : false">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Name of Country" :mandatory=true :modelValue=Country
                                :optionsList=CountryList @dropdown-on-change="CountryDropDown" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="CRSTinTextBox" label="CRS TIN" dataType="alphaNumericSpecial" maxLength=20
                                :mandatory=true :modelValue=CRSTin @text-box-on-blur="CRSTinTextBox" />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ReasonDropDown" label="Reason" :mandatory=true :modelValue=Reason
                                :optionsList=ReasonList @dropdown-on-change="ReasonDropDown" />
                        </div>
                    </div>
                </fieldset>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Current Residential Address</h3>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-6">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-6">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="timeAtCurrentAddressTextBox"
                                label="How long have you been living at the current address?"
                                dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                :modelValue=timeAtCurrentAddress />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-2">
                        <div class="section-header col-span-2">
                            <h3>Permanent Address</h3>
                        </div>
                        <div class="col-span-9">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox"
                                chekboxLabel="Permanent Address is Same as Current Address" :mandatory=false
                                :modelValue=undertaking1 @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-2">
                        <div class="section-header col-span-2">
                            <h3>Temporary Address</h3>
                        </div>
                        <div class="col-span-9">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox"
                                chekboxLabel="Temporary Address is Same as Current Address" :mandatory=false
                                :modelValue=undertaking1 @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                :isDisabled="isNextButtonAcPersonalDetailsDisabled"
                                @button-on-click="nextButtonAcPersonalDetails" />

                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="AcPersonalDetailsExisting" value="2" ref="panel2">
            <AccordionHeader>3. Account / Personal Details</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="IdentificationTypeDropDown" label="Identification Type" :mandatory=true
                                :modelValue=identificationType :optionsList=identificationTypesList />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="cnicPassportNumberTextBox" label="CNIC / Passport Number" dataType="Numeric"
                                maxLength=25 :mandatory=true mask="*****-*******-*" :modelValue=cnicNo />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-8">
                            <TextBox name="fullNameTextBox" label="Full Name (as per CNIC)" dataType="alphabetsOnly"
                                :isDisabled=true maxLength=25 :mandatory=true :modelValue=fullName />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="cnicPassportIssueDateTextBox" label="CNIC / Passport Issue Date"
                                dataType="Numeric" maxLength=10 :mandatory=true :modelValue=cnicIssueDate
                                :isDisabled=true mask="**/**/****" />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="cnicExpiryDateTextBox" label="CNIC / Passport Expiry Date" dataType="Numeric"
                                :isDisabled=true maxLength=10 :mandatory=true :modelValue=cnicExpiryDate
                                mask="**/**/****" />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="ntnNumberTextBox" label="NTN Number" dataType="Numeric" maxLength=10
                                :isDisabled=true :mandatory=true :modelValue=ntnNumber />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">

                        <div class="col-span-3">
                            <Dropdown name="salutationDropDown" label="Salutation" :mandatory=false
                                :modelValue=salutation :optionsList=salutationList
                                @dropdown-on-change="salutationDropDown" />

                        </div>
                        <div class="col-span-3">
                            <Dropdown name="qualificationDropDown" label="Educational Qualification" :mandatory=true
                                :modelValue=qualification :optionsList=qualificationList
                                @dropdown-on-change="qualificationDropDown" />

                        </div>
                        <div class="col-span-3">
                            <Dropdown name="maritalStatusDropDown" label="Marital Status" :mandatory=true
                                :modelValue=maritalStatus :optionsList=maritalStatusList
                                @dropdown-on-change="maritalStatusDropDown" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="dateOfBirthTextBox" label="Date of Birth" dataType="Numeric" maxLength=10
                                :isDisabled=true :mandatory=false :modelValue=ntnNumber mask="**/**/****" />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-2">
                            <RadioButton name="fatherSpouseRadioButton" :options=fatherSpouseRadioBtnList
                                :modelValue=fatherSpouseRadioBtn label=""
                                @radio-button-on-change="fatherSpouseRadioBtnOnChange" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="fatherSpouseNameTextBox" label="Father / Spouse Name"
                                dataType="alphabetsOnly" maxLength=30 :mandatory=true :modelValue=fatherSpouseName />

                        </div>
                        <div class="col-span-3">
                            <TextBox name="motherNameTextBox" label="Mother Name" dataType="alphabetsOnly" maxLength=30
                                :isDisabled=true :mandatory=true :modelValue=motherName />
                        </div>
                    </div>

                </fieldset>
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Family Information</h3>
                    </div>
                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-2">
                            <label for="">Number of Dependents <span class="text-red-600">*</span> </label>
                        </div>
                        <div class="col-span-3">
                            <TextBox name="childrenTextBox" label="Children" dataType="Numeric" maxLength=30
                                :mandatory=false :modelValue=children />

                        </div>
                        <div class="col-span-3">
                            <TextBox name="childrenTextBox" label="Others" dataType="Numeric" maxLength=12
                                :mandatory=false :modelValue=otherDependent />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="otherPhoneNoTextBox" label="Other Phone Number" dataType="Numeric"
                                maxLength=12 :mandatory=true :modelValue=otherPhoneNo mask="****-*******" />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <label>
                                Do you have a vehicle? <span class="text-red-600">*</span>
                            </label>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="haveVehicleRadioButton" :options="RadioBtnYesNoList"
                                :modelValue=haveVehicle label=""
                                @radio-button-on-change="haveVehicleRadioButtonOnChange" />
                        </div>
                        <div class="col-span-3" v-if="haveVehicle == 'yes' ? true : false" :md="6" :lg="6">
                            <TextBox name="vehicleModelTextBox"
                                label="If yes, Enter Make, Model and Registration Number" dataType="alphaNumericSpecial"
                                maxLength=12 :mandatory=true :modelValue=vehicleModel />

                        </div>
                        <div class="col-span-4" v-if="haveVehicle == 'yes' ? true : false" :md="6" :lg="6">
                            <Dropdown name="vehicleStatusDropDown" label="Vehicle Status" :mandatory=true
                                :modelValue=vehicleStatus :optionsList=vehicleStatusList />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <label>
                                Mode of Communication by Bank <span class="text-red-600">*</span>
                            </label>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="bankModeOfCoomunicationRadioButton" :options=bankModeOfCoomunicationList
                                :modelValue=bankModeOfCoomunication label=""
                                @radio-button-on-change="bankModeOfCoomunicationOnChange" />
                        </div>
                    </div>
                </fieldset>
                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Current Residential Address</h3>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-6">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-6">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="timeAtCurrentAddressTextBox"
                                label="How long have you been living at the current address?"
                                dataType="alphaNumericSpecial" maxLength=30 :mandatory=true
                                :modelValue=timeAtCurrentAddress />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-2">
                        <div class="section-header col-span-2">
                            <h3>Permanent Address</h3>
                        </div>
                        <div class="col-span-9">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox"
                                chekboxLabel="Permanent Address is Same as Current Address" :mandatory=false
                                :modelValue=undertaking1 @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-2">
                        <div class="section-header col-span-2">
                            <h3>Temporary Address</h3>
                        </div>
                        <div class="col-span-9">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox"
                                chekboxLabel="Temporary Address is Same as Current Address" :mandatory=false
                                :modelValue=undertaking1 @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <Dropdown name="CountryDropDown" label="Country" :mandatory=true :modelValue=CurrAddCountry
                                :optionsList=CountryList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="ProvinceDropDown" label="Province" :mandatory=true :modelValue=Province
                                :optionsList=ProvinceList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="CityDropDown" label="City" :mandatory=true :modelValue=City
                                :optionsList=CityList />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="AreaTextBox" label="Area" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=Area />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BlockTextBox" label="Block" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=BlockTextBoxValue />

                        </div>
                        <div class="col-span-4">
                            <TextBox name="HouseNoTextBox" label="House No." dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=true :modelValue=HouseNo />

                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="NearestLandMarkTextBox" label="Nearest Landmark"
                                dataType="alphaNumericSpecial" maxLength=50 :mandatory=true
                                :modelValue=NearestLandMark />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="ResidenceStatusDropDown" label="Residence Status" :mandatory=true
                                :modelValue=ResidenceStatus :optionsList=ResidenceStatusList />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="AccomodationTypeDropDown" label="Type of Accomodation" :mandatory=true
                                :modelValue=AccomodationType :optionsList=AccomodationTypeList />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="rentInRsTextBox" label="If rented, monthly rent in Rs."
                                dataType="numericSpecial" maxLength=17 :mandatory=true :modelValue=rentInRs />

                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10"></div>
                        <div class="col-span-2">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonAcPersonalDetails" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="OccupationalDetails" value="3" ref="panel3">
            <AccordionHeader>4. Occupational Details</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <Dropdown name="occupationalStatusDropDown" label="Occupational Status" :mandatory=true
                                :modelValue=OccupationalStatusValue :optionsList=OccupationalStatusList
                                @dropdown-on-change="occupationalStatusDropDown" />

                        </div>
                        <div class="col-span-3">
                            <TextBox name="occupationProfessionTextBox" label="Occupation / Profession"
                                dataType="alphaNumericSpecial" maxLength=20 :mandatory=true
                                :modelValue=occupationProfession @text-box-on-key-up="occupationProfessionTextBox" />

                        </div>
                        <div class="col-span-3">
                            <TextBox name="employmemntLengthTextBox" label="Length of Employment"
                                dataType="alphaNumericSpecial" maxLength=20 :mandatory=true
                                :modelValue=employmemntLength @text-box-on-key-up="employmemntLengthTextBox" />

                        </div>
                        <div class="col-span-3">
                            <TextBox name="employerNameTextBox" label="Employer Name" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=true :modelValue=employerName
                                @text-box-on-key-up="employerNameTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="employmentYearsTextBox" label="How Many Years in present Employment?"
                                dataType="alphaNumericSpecial" maxLength=12 :mandatory=true :modelValue=employmentYears
                                @text-box-on-key-up="employmentYearsTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="positionTextBox" label="Position / Designation"
                                dataType="alphaNumericSpecial" maxLength=12 :mandatory=true :modelValue=position
                                @text-box-on-key-up="positionTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="officeAddressTextBox" label="Office Address" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=true :modelValue=officeAddress
                                @text-box-on-key-up="officeAddressTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="phoneTextBox" label="Phone" dataType="alphaNumericSpecial" maxLength=12
                                :mandatory=true :modelValue=phone mask="****-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="faxTextBox" label="Fax" dataType="alphaNumericSpecial" maxLength=12
                                :mandatory=true :modelValue=fax mask="***-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="officeEmailTextBox" label="Office Email" dataType="alphaNumericSpecial"
                                maxLength=20 :mandatory=true :modelValue=officeEmail mask="***-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <span>
                                <b>Previous Employer</b>
                                <span>
                                    (Required only if the current employment is less than 1 year)
                                </span>
                            </span>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="employerName2TextBox" label="Employer Name" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=false :modelValue=employerName2 mask="***-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="phone2TextBox" label="Phone" dataType="alphaNumericSpecial" maxLength=12
                                :mandatory=true :modelValue=phone2 mask="****-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="fax2TextBox" label="Fax" dataType="alphaNumericSpecial" maxLength=12
                                :mandatory=true :modelValue=fax2 mask="***-*******"
                                @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="inEmploymentSinceTextBox" label="In Employment since"
                                dataType="alphaNumericSpecial" maxLength=20 :mandatory=false
                                :modelValue=inEmploymentSince @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <textbox v-model="inEmploymentSince" :required="true" maxLength="20"
                                label="In Employment since" @text-box-on-key-up="cnicNoTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <label>
                                Preferred Mailing Address <span class="text-red-600">*</span>
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <RadioButton name="preferredMailingAddressRadioButton" :options=preferredMailingAddressList
                                :modelValue=preferredMailingAddress label=""
                                @radio-button-on-change="preferredMailingAddressOnChange" />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                :isDisabled="isDisabledNextButtonOccupationalDetails"
                                @button-on-click="nextButtonOccupationalDetails" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="incomeDetails" value="4" ref="panel4">
            <AccordionHeader>5. Income Details</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="grossMonthlySalaryTextBox" label="Gross Monthly Salary"
                                dataType="NumericSpecial" maxLength=40 :mandatory=true :modelValue=grossMonthlySalary />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="netMonthlyIncomeTextBox" label="Net Monthly Income" dataType="NumericSpecial"
                                maxLength=40 :mandatory=true :modelValue=netMonthlyIncome />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="monthlyIncomeFromOtherSourcesTabularTextBox"
                                label="Monthly Income from Other Sources Tabular" dataType="NumericSpecial" maxLength=40
                                :mandatory=true :modelValue=monthlyIncomeFromOtherSourcesTabular />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="otherIncomeSourcesTextBox" label="Sources of Other Income"
                                dataType="NumericSpecial" maxLength=40 :mandatory=true :modelValue=otherIncomeSources />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="totalGrossMonthlyIncomeTextBox" label="Total Gross Monthly Income"
                                dataType="NumericSpecial" maxLength=40 :mandatory=false
                                :modelValue=totalGrossMonthlyIncome />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="endOfServiceBenefitsTextBox"
                                label="End of Service Benefits as of last month (for Salaried)"
                                dataType="NumericSpecial" maxLength=40 :mandatory=true
                                :modelValue=endOfServiceBenefits />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonIncomeDetails" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="desiredFinancingDetails" value="5" ref="panel5">
            <AccordionHeader>6. Desired Financing Details</AccordionHeader>
            <AccordionContent>

                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div :lg="3" class="col-span-2">
                            <label>Type of Vehicle <span class="text-red-600">*</span> </label>
                        </div>
                        <div class="col-span-4">

                            <RadioButton name="vehicleTypeRadioButton" :options=vehicleTypeList :modelValue=vehicleType
                                label="" @radio-button-on-change="vehicleTypeOnChange" />
                        </div>

                        <div :lg="7" class="col-span-3">
                            <TextBox name="makeTextBox" label="Make" dataType="NumericSpecial" maxLength=40
                                :mandatory=true :modelValue=make />
                        </div>

                        <div class="col-span-3">
                            <TextBox name="modelTextBox" label="Model" dataType="alphaNumericSpecial" maxLength=40
                                :mandatory=true :modelValue=model />
                        </div>


                    </div>



                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="colorTextBox" label="Color" dataType="alphaumericSpecial" maxLength=40
                                :mandatory=true :modelValue=color />
                        </div>
                        <div :lg="7" class="col-span-4">
                            <TextBox name="downPaymentTextBox" label="Equity / Down Payment"
                                dataType="alphaumericSpecial" maxLength=40 :mandatory=true :modelValue=downPayment />
                        </div>

                        <div class="col-span-4">
                            <TextBox name="priceTextBox" label="Price (Rs.)" dataType="alphaumericSpecial" maxLength=40
                                :mandatory=true :modelValue=price />
                        </div>

                    </div>



                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div :lg="3" class="col-span-2">
                            <label>Mode of Financing <span class="text-red-600">*</span> </label>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="modeOfFinancingRadioButton" :options=modeOfFinancingList
                                :modelValue=modeOfFinancing label=""
                                @radio-button-on-change="modeOfFinancingOnChange" />
                        </div>

                        <div :lg="15" class="col-span-4">
                            <TextBox name="desiredFinancingAmountTextBox" label="Desired Financing Amount"
                                dataType="alphaumericSpecial" maxLength=40 :mandatory=true
                                :modelValue=desiredFinancingAmount />
                        </div>

                    </div>



                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div :lg="3" class="col-span-2">
                            <label>Mark-up Mode <span class="text-red-600">*</span> </label>
                        </div>
                        <div class="col-span-2">
                            <RadioButton name="markUpModeRadioButton" :options=markUpModeList :modelValue=markUpMode
                                label="" @radio-button-on-change="markUpModeOnChange" />
                        </div>

                        <div :lg="7" class="col-span-4">
                            <Dropdown name="modeOfRepaymentDropDown" label="Modes of Repayment" :mandatory=true
                                :modelValue=modeOfRepayment :optionsList=modeOfRepaymentList />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="desiredFinancingDropDown" label="Desired Financing Tenure" :mandatory=true
                                :modelValue=desiredFinancing :optionsList=desiredFinancingList />

                        </div>

                    </div>



                    <!-- ================= Note ================= -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <span>
                                Pricing and Repayment: The pricing and payment / repayment terms of the facility
                                will be communicated to you in an offer letter of the Bank and agreement(s).
                            </span>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonDesiredFinancingDetails" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="references" value="6" ref="panel6">
            <AccordionHeader>7. References</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <h4>
                                <b>Reference 1 </b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference1NameTextBox" label="Name" dataType="alphabetsOnly" maxLength=30
                                :mandatory=true :modelValue=Reference1Name />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference1RelationshipTextBox" label="Relationship" dataType="alphabetsOnly"
                                maxLength=30 :mandatory=true :modelValue=Reference1Relationship />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference1CNICTextBox" label="CNIC" mask="*****-*******-*" dataType="Numeric"
                                maxLength=15 :mandatory=true :modelValue=Reference1CNIC />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference1HomePhoneTextBox" label="Home Phone" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference1HomePhone />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference1OtherPhoneTextBox" label="Other Phone" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference1OtherPhone />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference1MobileTextBox" label="Mobile" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference1Mobile />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference1AddressTextBox" label="Address" dataType="alphaNumericSpecial"
                                maxLength=12 :mandatory=true :modelValue=Reference1Address />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <h4>
                                <b>Reference 2 </b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference2NameTextBox" label="Name" dataType="alphabetsOnly" maxLength=30
                                :mandatory=true :modelValue=Reference2Name />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference2RelationshipTextBox" label="Relationship" dataType="alphabetsOnly"
                                maxLength=30 :mandatory=true :modelValue=Reference2Relationship />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference2CNICTextBox" label="CNIC" mask="*****-*******-*" dataType="Numeric"
                                maxLength=15 :mandatory=true :modelValue=Reference2CNIC />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference2HomePhoneTextBox" label="Home Phone" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference2HomePhone />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference2OtherPhoneTextBox" label="Other Phone" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference2OtherPhone />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="Reference2MobileTextBox" label="Mobile" mask="****-*******"
                                dataType="Numeric" maxLength=12 :mandatory=true :modelValue=Reference2Mobile />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="Reference2AddressTextBox" label="Address" dataType="alphaNumericSpecial"
                                maxLength=12 :mandatory=true :modelValue=Reference2Address />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonReferences" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="Documents" value="7" ref="panel7">
            <AccordionHeader>8. Documents</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-5" :lg="12">
                            <h3>
                                <b>Are You a Salaried Individual or Self Employed / Business
                                    Individual? <span class="text-red-600">*</span></b>
                            </h3>
                        </div>
                        <div class="col-span-4">
                            <RadioButton name="SalariedOrselfEmployedRadioButton" :options=RadioBtnDocumentList
                                :modelValue=SalariedOrselfEmployed label=""
                                @radio-button-on-change="SalariedOrselfEmployedChange" />
                        </div>
                    </div>

                    <div v-if="SalariedOrselfEmployed == 'salariedIndividual' ? true : false">
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-4">
                                <h4>
                                    <b>Loan Applicant (Salaried Individual) </b>
                                </h4>
                            </div>
                        </div>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>CNIC</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <FileUpload name="CNICFront" label="CNIC Front" icon="pi pi-id-card"
                                        @file-selected="handleFile" />

                                </div>
                                <div class="col-span-4">
                                </div>
                                <div class="col-span-4">
                                    <FileUpload name="CNICBack" label="CNIC Back" icon="pi pi-id-card"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Bank Statement</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="bankStatement" label="Upload" icon="pi pi-receipt"
                                        @file-selected="handleFile" />
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4" v-if="isAccountHolder == 'yes' ? true : false">
                                    <h3 class="section-header">OR</h3>
                                </div>
                                <!-- <div class="col-span-4">
                                </div> -->

                                <div class="col-span-2" v-if="isAccountHolder == 'yes' ? true : false">
                                    <Button label="Fetch Bank Statement" backgroundColor="var(--primary-color)"
                                        name="fetchBankStatementButton" @button-on-click="fetchBankStatementButton" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Passport Photograph</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="takePhoto" label="Take Photo" icon="pi pi-camera"
                                        :showDragFileText=false @file-selected="handleFile" />
                                    <!-- <CameraCapture label="Take Photo" icon="pi pi-camera"
                                        @image-captured="handleFile" /> -->
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4">
                                    <h3 class="section-header">OR</h3>
                                </div>

                                <div class="col-span-4">
                                    <FileUpload name="uploadFromGallery" label="Upload from Gallery" icon="pi pi-image"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Employment certificate / job card</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="uploadDocument" label="Upload" icon="pi pi-receipt"
                                        @file-selected="handleFile" />
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4">
                                    <h3 class="section-header">OR</h3>
                                </div>

                                <div class="col-span-4">
                                    <FileUpload name="anyOtherDocument" label="Any other document required by Bank"
                                        icon="pi pi-plus" @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="section-header col-span-12">
                                    <h3>Salary Slips</h3>
                                </div>

                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="salarySlip1" label="Salary Slip" icon="pi pi-file-pdf"
                                        @file-selected="handleFile" />
                                </div>
                                <div class="col-span-4">
                                    <FileUpload name="salarySlip2" label="Salary Slip" icon="pi pi-file-pdf"
                                        @file-selected="handleFile" />
                                </div>
                                <div class="col-span-4">
                                    <FileUpload name="salarySlip3" label="Salary Slip" icon="pi pi-file-pdf"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                    </div>
                    <div v-if="SalariedOrselfEmployed == 'selfEmployedBusinessIndivial' ? true : false">
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-4">
                                <h4>
                                    <b>Loan Applicant (Self Employed / Business
                                        Individual) </b>
                                </h4>
                            </div>
                        </div>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>CNIC</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4">
                                    <FileUpload name="CNICFrontSelfEmployed" label="CNIC Front" icon="pi pi-id-card"
                                        @file-selected="handleFile" />
                                </div>
                                <div class="col-span-4">
                                </div>
                                <div class="col-span-4">
                                    <FileUpload name="CNICBackSelfEmployed" label="CNIC Back" icon="pi pi-id-card"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Bank Statement</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="bankStatementSelfEmployed" label="Upload" icon="pi pi-receipt"
                                        @file-selected="handleFile" />
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4" v-if="isAccountHolder == 'yes' ? true : false">
                                    <h3 class="section-header">OR</h3>
                                </div>
                                <!-- <div class="col-span-4">
                                </div> -->

                                <div class="col-span-2" v-if="isAccountHolder == 'yes' ? true : false">
                                    <Button label="Fetch Bank Statement" backgroundColor="var(--primary-color)"
                                        name="fetchBankStatementButton" @button-on-click="fetchBankStatementButton" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">

                            <div class="section-header">
                                <h3>Passport Photograph</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="takePhotoSelfEmployed" label="Take Photo" icon="pi pi-camera"
                                        :showDragFileText=false @file-selected="handleFile" />
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4">
                                    <h3 class="section-header">OR</h3>
                                </div>

                                <div class="col-span-4">
                                    <FileUpload name="uploadFromGallerySelfEmployed" label="Upload from Gallery"
                                        icon="pi pi-image" @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <div class="section-header">
                                <h3>Business Proof</h3>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4" align="middle">
                                <div class="col-span-4">
                                    <FileUpload name="uploadDocumentSelfEmployed" label="Upload" icon="pi pi-receipt"
                                        @file-selected="handleFile" />
                                </div>

                                <!-- OR in the middle -->
                                <div class="col-span-4">
                                    <h3 class="section-header">OR</h3>
                                </div>

                                <div class="col-span-4">
                                    <FileUpload name="anyOtherDocumentSelfEmployed"
                                        label="Any other document required by Bank" icon="pi pi-plus"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </fieldset>

                    </div>
                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonDocuments" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="coApplicant" value="8" ref="panel8">
            <AccordionHeader>9. Co-applicant Details</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <h4>
                                <b>Do you have a co-Applicant also? <span class="text-red-600">*</span> </b>
                            </h4>
                        </div>
                        <div class="col-span-4">
                            <RadioButton name="coApplicantRadioButton" :options=RadioBtnYesNoList
                                :modelValue=coApplicantValue label=""
                                @radio-button-on-change="coApplicantRadioButtonOnChange" />
                        </div>
                    </div>

                    <!-- //////////////////////////////// -->
                    <div v-if="coApplicantValue == 'yes' ? true : false">
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-3">
                                <TextBox name="nameCoApplicantTextBox" label="Name" dataType="alphabetsOnly"
                                    maxLength=30 :mandatory=true :modelValue=nameCoApplicant
                                    @text-box-on-key-up="nameCoApplicantTextBox" />
                            </div>
                            <div class="col-span-3">
                                <TextBox name="mobileCoApplicantTextBox" label="Mobile" mask="****-*******"
                                    dataType="Numeric" maxLength=12 :mandatory=true :modelValue=mobileCoApplicant
                                    @text-box-on-key-up="mobileCoApplicantTextBox" />
                            </div>
                            <div class="col-span-3">
                                <TextBox name="emailCoApplicantTextBox" label="Email" dataType="alphaNumericSpecial"
                                    maxLength=30 :mandatory=true :modelValue=emailCoApplicant
                                    @text-box-on-key-up="emailCoApplicantTextBox" />
                            </div>
                            <div class="col-span-2" :lg="3">
                                <Button label="Send Invite" backgroundColor="var(--primary-color)" name="NextButton"
                                    :isDisabled="isSendInviteButtonDisabled" @button-on-click="sendInviteButton" />
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-10" :lg="3">
                                <coApplicantGrid :list="coApplicantList" />
                            </div>
                        </div>
                        <!-- <div class="grid grid-cols-12 gap-4 mb-4">
                            <div :lg="18" class="col-span-4"
                                <Button label="Add New" backgroundColor="var(--primary-color)" name="AddNewButton"
                                    icon="pi-plus" @button-on-click="addNewCoApplicant" />
                            </div>
                        </div> -->
                    </div>
                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonCoApplicant" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="branchSelection" value="9" ref="panel9">
            <AccordionHeader>10. Branch Selection</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="accountTitleBranchSelectionTextBox" label="Account Title"
                                dataType="alphaNumericSpecial" maxLength=30 :mandatory=false
                                :modelValue=accountTitleBranchSelection />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="accountNoBranchSelectionTextBox" label="Account Number"
                                mask="****-****-******-**-*" dataType="Numeric" maxLength=30 :mandatory=false
                                :modelValue=accountNoBranchSelection />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="BranchTextBox" label="Branch" dataType="alphaNumericSpecial" maxLength=30
                                :mandatory=false :modelValue=Branch />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <h4>
                                <b>Select Another Branch For Loan</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">

                            <label>Do you want to select another branch or use your preferred branch? <span
                                    class="text-red-600">*</span> </label>

                        </div>
                    </div>

                    <div>
                        <RadioButton name="branchRadioButton" :options=branchList :modelValue=branchValue label=""
                            @radio-button-on-change="branchOnChange" />
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4" v-if="branchValue == 'currentBranch' ? false : true">
                        <div class="col-span-4">
                            <Dropdown name="selectedCityDropDown" label="Select City" :mandatory=false
                                :modelValue=selectedCity :optionsList=selectedCityList />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="selectedAreaDropDown" label="Select Area" :mandatory=false
                                :modelValue=selectedArea :optionsList=selectedAreaList />

                        </div>
                        <div class="col-span-4">
                            <Dropdown name="selectedBranchDropDown" label="Select Branch" :mandatory=false
                                :modelValue=selectedBranch :optionsList=selectedBranchList />

                        </div>
                    </div>

                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonBranchSelection" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="cf1Form" value="10" ref="panel10">
            <AccordionHeader>11. CF-1 Form</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Details of Credit Cards (Clean) limits being availed from other banks / DFIs</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div :lg="12" class="col-span-4">
                            <TextBox name="cleanCreditCardBankNameTextBox" label="Name of the Bank" dataType="Numeric"
                                maxLength=45 :mandatory=true :modelValue=cleanCreditCardBankName
                                @text-box-on-key-up="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div :lg="12" class="col-span-4">
                            <TextBox name="cleanCreditCardApprovedLimitTextBox" label="Approved Limit"
                                dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                :modelValue=cleanCreditCardApprovedLimit @text-box-on-blur="AccountNumberTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Details of Credit Cards (Secured) limits being availed from other banks / DFIs</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div :lg="12" class="col-span-4">
                            <TextBox name="securedCreditCardBankNameTextBox" label="Name of the Bank" dataType="Numeric"
                                maxLength=45 :mandatory=true :modelValue=securedCreditCardBankName
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div :lg="12" class="col-span-4">
                            <TextBox name="securedCreditCardApprovedLimitTextBox" label="Approved Limit"
                                dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                :modelValue=securedCreditCardApprovedLimit @text-box-on-blur="AccountNumberTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Details of Personal Loan (Clean) limits being availed from other banks / DFIs</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="cleanPersonalLoanBankNameTextBox" label="Name of the Bank" dataType="Numeric"
                                maxLength=45 :mandatory=true :modelValue=cleanPersonalLoanBankName
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="cleanPersonalLoanApprovedLimitTextBox" label="Approved Limit"
                                dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                :modelValue=cleanPersonalLoanApprovedLimit @text-box-on-blur="AccountNumberTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="cleanPersonalLoanOutstandingAmountTextBox"
                                label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=true :modelValue=cleanPersonalLoanOutstandingAmount
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Details of Personal Loan (Secured) limits being availed from other banks / DFIs</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="securedPersonalLoanBankNameTextBox" label="Name of the Bank"
                                dataType="Numeric" maxLength=45 :mandatory=true :modelValue=securedPersonalLoanBankName
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="securedPersonalLoanApprovedLimitTextBox" label="Approved Limit"
                                dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                :modelValue=securedPersonalLoanApprovedLimit @text-box-on-blur="AccountNumberTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="securedPersonalLoanOutstandingAmountTextBox"
                                label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=true :modelValue=securedPersonalLoanOutstandingAmount
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Details of other fcilities if any (Clean & Secured) being availed from other banks /
                                    DFIs</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-3">
                            <TextBox name="otherFacilitiesBankNameTextBox" label="Name of the Bank" dataType="Numeric"
                                maxLength=45 :mandatory=true :modelValue=otherFacilitiesBankName
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="otherFacilitiesApprovedLimitTextBox" label="Approved Limit"
                                dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                :modelValue=otherFacilitiesApprovedLimit
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-3">
                            <Dropdown name="natureOfFacilityDropDown" label="Nature of Facility (Clean / Secured)"
                                :mandatory=false :modelValue=natureOfFacility :optionsList=natureOfFacilityList />
                        </div>
                        <div class="col-span-3">
                            <TextBox name="otherFacilitiesOutstandingAmountTextBox"
                                label="Amount Outstanding on Application Date" dataType="alphaNumericSpecial"
                                maxLength=45 :mandatory=true :modelValue=otherFacilitiesOutstandingAmount
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <h4>
                                <b>Applied Limits (including the application in process)</b>
                            </h4>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4">
                            <TextBox name="appliedLimitsBankNameTextBox" label="Name of the Bank" dataType="Numeric"
                                maxLength=45 :mandatory=true :modelValue=appliedLimitsBankName
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-4">
                            <TextBox name="appliedLimitsFacilityUnderProcessTextBox" label="Facility under Process"
                                dataType="Numeric" maxLength=45 :mandatory=true
                                :modelValue=appliedLimitsFacilityUnderProcess
                                @text-box-on-blur="cleanCreditCardBankNameTextBox" />
                        </div>
                        <div class="col-span-4">
                            <Dropdown name="appliedLimitsnatureOfFacilityDropDown"
                                label="Nature of Facility (Clean / Secured)" :mandatory=false
                                :modelValue=appliedLimitsnatureOfFacility
                                :optionsList=appliedLimitsnatureOfFacilityList />
                        </div>
                    </div>
                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextButtonCF1Form" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="reviewAndVerify" value="11" ref="panel11">
            <AccordionHeader>12. Review & Verify</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <div class="section-header">
                        <h3>Letter of Understanding</h3>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <p>
                                Reference to my application of Auto Finance Facility from the Bank,
                                I hereby acknowledge and confirm that:
                            </p>
                            <br>
                            <ul class="list-disc list-inside ml-6 space-y-1">
                                <li>
                                    The applicable IRR (Internal Rate of Return) on the Facility is 2%, which shall be
                                    fixed for
                                    the entire tenure of Facility. (For fixed markup mode)
                                </li>
                            </ul>

                            <p class="ml-6 space-y-1">OR</p>

                            <ul class="list-disc list-inside ml-6 space-y-1">
                                <li>
                                    Applicable Floating Rate on the facility is 1 YR KIBOR (Base Rate) plus 1.50%
                                    (Spread).
                                    Base Rate shall be reviewed on the last business day of the previous Base Period.
                                    (For floating markup mode)
                                </li>
                                <li>
                                    Upon approval of the facility, I shall provide post dated cheques/debit authority
                                    for the
                                    repayments of my monthly instalments to the bank.
                                </li>
                                <li>
                                    Processing Fee of Rs. 2000/- shall be paid by me to the bank.
                                </li>
                                <li>
                                    My 1st total monthly instalment may vary from the repayment schedule which shall be
                                    based
                                    on the date of the disbursement. Furthermore, I understand that if the facility is
                                    disbursed
                                    before 16th of the month my 1st monthly instalment shall be due on the 1st of the
                                    following month.
                                </li>
                                <li>
                                    Installation of tracking device (if applicable) is solely being arranged by the
                                    insurance
                                    company which is selected with my consent.
                                </li>
                                <li>
                                    I am aware that the change in price and delivery of financed vehicle is the sole
                                    discretion
                                    of manufacturer/distributor which is selected with my consent.
                                </li>
                                <li>
                                    I am aware that after disbursement of the facility, if there is any change in the
                                    vehicle price,
                                    it shall be borne by me, as and when demanded by the manufacturer/distributor.
                                </li>
                                <li>
                                    I am also aware that financed vehicle shall be covered under comprehensive insurance
                                    policy
                                    at the price mentioned in the Offer Letter.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="section-header">
                        <h3>Terms & Conditions</h3>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <p>We acknowledge and confirm that:</p>

                            <ol class="list-decimal list-inside space-y-2 ml-4">
                                <li>No legal proceedings have been threatened or commenced or underway against me/us.
                                </li>

                                <li>
                                    All information furnished by me/us in this application is true, complete and
                                    accurate
                                    to the best of my/our knowledge.
                                </li>

                                <li>
                                    The documents which are attached/mentioned in the Application Form are aware to
                                    me/us
                                    and will be responsibly used.
                                </li>

                                <li>
                                    The Facility is only a revolving nature. The term or conditions contained in the
                                    Application Form shall always be binding on me/us.
                                </li>

                                <li>
                                    The letter of sanction by Bank for the said facility, my regular
                                    financial
                                    and income or business status, personal profiles, age, occupation, or any other
                                    factors.
                                    <br />
                                    We further undertake that Bank, without assigning any reason or burden may refuse or
                                    discontinue/reduce to me/us.
                                    <br />
                                    We further acknowledge that Bank may share/receive information with credit
                                    information
                                    bureau i.e. SBP, CIB/other institutions/members of these bureaus and other
                                    banks/financial
                                    institutions and agents etc.
                                    <br />
                                    We undertake to provide and submit/update complete information subject to their full
                                    being,
                                    terms and conditions regarding the payment schedule, penalty or any other dues.
                                </li>

                                <li>
                                    We acknowledge the fact that the Facility requested by me/us in the application form
                                    is
                                    intended to be the revolving Facility. The disbursement of RMCF and Bank
                                    reserves every right to reverse this application/Facility in case of any misconduct.
                                </li>

                                <li>
                                    We acknowledge/agree to hold the Bank indemnified and harmless against any losses or
                                    damages,
                                    suffered by Bank, claims/suits, actions, institution, from any third party or
                                    ourselves or
                                    my/our legal heirs/representatives without any limitation for misuse, loss, theft
                                    and any
                                    other discrepancy of the device issued to me/us for using the Facility.
                                </li>

                                <li>
                                    We agree that Bank shall be entitled to exclusive without any
                                    hesitation,
                                    authority, charge or lien over goods/items/merchandise as security, which shall be
                                    sold
                                    for the recovery of outstanding amount.
                                </li>

                                <li>
                                    The interest/profit rate on our Personal Facility is:
                                    <ul>
                                        <p>
                                            (i) The fixed interest rate shall be the Fixed Rate offered by
                                            Bank.
                                        </p>
                                        <p>
                                            OR
                                        </p>
                                        <p>
                                            (ii) Applicable Floating Rate on the Facility is _____ i.e. KIBOR Base
                                            (fixed) plus _____
                                            (Bank Spread). (Bank Spread may be revised based on the bank's policy of the
                                            Bank.)
                                        </p>
                                    </ul>
                                </li>

                                <li>
                                    I/We agree that the Bank shall have the right to disburse the Loan amount or part of
                                    the loan
                                    amount through Pay Order or Demand Draft in favour of the supplier of the
                                    item/utility
                                    mentioned by me/us.
                                </li>

                                <li>
                                    The original of the Facility installment/card issued to the under-signed authority
                                    for the
                                    requested Facility.
                                </li>

                                <li>It is understood that I/we shall repay/pay the said Facility to the Bank.</li>

                                <li>
                                    The processing fee(s)/renewal/annual fee(s) shall be part of this Account, at the
                                    time of
                                    disbursement and the Bank shall never refund the said amount under any
                                    circumstances.
                                </li>

                                <li>
                                    The title of the goods to be given by me/us before being arranged by the
                                    finance/installment Facility/Bank is solely binding on us.
                                </li>

                                <li>
                                    I/We shall not transfer the change of place or sell or demand other facilities to
                                    the Bank
                                    without written approval.
                                </li>

                                <li>
                                    We otherwise well aware that after disbursement of the Facility, if there is/are any
                                    difference in our signatures, the facility will stand cancelled without assigning
                                    any reason.
                                </li>

                                <li>
                                    We also acknowledge that the financed vehicle shall be covered under insurance
                                    through an
                                    insurance company.
                                </li>

                                <li>
                                    We further acknowledge that insurance claims and/or received favored for the Bank.
                                </li>

                                <li>
                                    We will, under all common laws be liable for any criminal process, in case, I/We
                                    shall omit
                                    any signature on the Vehicle or related documents.
                                </li>

                                <li>
                                    We further shall not transfer or damage this documents/application in any written or
                                    oral form.
                                </li>

                                <li>
                                    We shall only use the Personal Finance Facility for the purpose of HIB and any other
                                    items.
                                </li>

                                <li>
                                    We shall not use this Facility for purchase of shares, securities or real estate.
                                </li>

                                <li>
                                    We further agree that if my/our name(s) appear in the exit control list, we will
                                    immediately
                                    inform Bank.
                                </li>

                                <li>
                                    We hereby authorize the Bank to contact me/us for collection/pending repayment of
                                    loan, if any.
                                </li>

                                <li>This Facility is for Personal Use only.</li>

                                <li>Any additional requirements may apply.</li>
                            </ol>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <p>
                                Bank has always provided financial products with a customer-centric
                                approach,
                                keeping the interest of its customers at the forefront.
                            </p>

                            <p>
                                In this regard, a “Customer Protection Framework” is being shared to create
                                awareness as the Bank has launched a Customer Protection policy, which defines the part
                                pertaining to the roles & responsibilities of the customers. The salient points are:
                            </p>
                            <br>

                            <ol class="list-decimal list-inside space-y-2 ml-4">
                                <li>
                                    Be Honest with the Information Provided:<br />
                                    Provide accurate information when filling any Bank documents. The customer should
                                    not give
                                    false details or leave out important information.
                                </li>

                                <li>
                                    Read all the Information Provided by the Bank:<br />
                                    Customers are encouraged and required to read all the information provided by the
                                    Bank.
                                    The Bank will clearly mention all mandatory hints over the board.
                                </li>

                                <li>
                                    Ask Questions for Clarity:<br />
                                    Customers are encouraged to ask questions from the Bank’s representatives if they
                                    have any
                                    doubt or their query cannot be answered. The Bank staff shall answer questions in a
                                    professional manner to help customers make better decisions.
                                </li>

                                <li>
                                    Know Where to Make a Complaint:<br />
                                    Customers can register their complaints and/or know how to lodge a complaint about
                                    improper
                                    financial services. The Bank’s complaint resolution mechanism is visible on the
                                    Customer
                                    Service desks of the Bank. Customers may obtain information in case the complaint is
                                    not
                                    addressed within the given timeframe.
                                </li>

                                <li>
                                    Do Not Provide or Share Details to Unknown People:<br />
                                    Customers should take precautionary measures and ensure their sensitive information
                                    is not
                                    compromised in any case. Sensitive & confidential information i.e. ATM PINs,
                                    passwords etc.
                                    empower the customer while dealing with the Bank.
                                </li>

                                <li>
                                    Be a Customer of Service with Best Terms & Conditions:<br />
                                    Customers should always be aware regarding the risk. Customers understand the nature
                                    of the
                                    service and that the customer has expert knowledge to make a wise decision with the
                                    Bank.
                                </li>

                                <li>
                                    Do Not Obscure Banking Information:<br />
                                    Customers should refrain from disclosing their private Bank account information
                                    which may
                                    jeopardize their financial relationship or any third party. Update information
                                    timely.
                                    Bank will never disclose customer personal/confidential information so that it is
                                    protected
                                    and safeguarded to the best of Bank’s efforts.
                                </li>

                                <li>
                                    Keep Copies of Documents:<br />
                                    Customers are advised to retain their own records of important documents related to
                                    the
                                    banking relationship with the Bank. It helps maintain transparency.
                                </li>

                                <li>
                                    Be Aware of Numbers:<br />
                                    Customers should check if the amount paid or required fields and numbers are
                                    completed on a
                                    form that is provided to the Bank. Selling any information is wrong and doing so is
                                    not
                                    encouraged.
                                </li>

                                <li>
                                    Fulfill Obligations Against the Signed Statement:<br />
                                    Customers must adhere to the obligations in the contract, including terms, repayment
                                    schedule, and usage. The Bank may contact the customers for recovery of overdue
                                    installments.
                                </li>
                            </ol>
                            <br>
                            <p>
                                We hope that the above information will help enhance financial literacy among our valued
                                customers and enable them to make informed decisions.
                            </p>

                            <p>
                                We look forward to providing the best of the Bank culture and enhance financial
                                inclusion in
                                the banking sector.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox"
                                chekboxLabel="I / We hereby apply for Consumer Finance (Facility) from the Bank as indicated in this application."
                                :mandatory=false chekboxLabelColor=var(--primary-dark) :modelValue=undertaking1
                                @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-12">
                            <!-- <div class="flex flex-col gap-4 mb-4"> -->
                            <Checkbox name="undertakingCheckBox" chekboxLabel="I / We undertake that this Facility will be utilized for
                                    Personal Use Only." :mandatory=false chekboxLabelColor=var(--primary-dark)
                                :modelValue=undertaking1 @update:modelValue="onCheckBoxChange" />
                            <!-- </div> -->
                        </div>
                    </div>
                    <!-- //////////////////////////////// -->

                </fieldset>
                <fieldset>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-10" :lg="21"></div>
                        <div class="col-span-2" :lg="3">
                            <Button label="Next" backgroundColor="var(--primary-color)" name="NextButton"
                                @button-on-click="nextReviewAndVerify" />
                        </div>
                    </div>
                </fieldset>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel v-if="underTaking" value="12" ref="panel12">
            <AccordionHeader>13. UnderTaking & Submission</AccordionHeader>
            <AccordionContent>

                <!-- //////////////////////////////// -->
                <fieldset class="mt-4">
                    <!-- Tabs -->
                    <TabView v-model:activeIndex="activeTab" @tab-change="onTabChange">
                        <!-- ================= PHYSICAL SIGNATURE TAB ================= -->
                        <TabPanel header="Physical Signature">

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-1" :lg="1">
                                </div>
                                <div class="col-span-11" :lg="23">
                                    <label>
                                        You have successfully completed your loan application form.
                                        Please <strong>download</strong> the form,
                                        <strong>print it</strong>, <strong>sign the physical copy</strong>,
                                        and then <strong>upload the scanned signed document</strong>.
                                    </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-5" :lg="10"></div>
                                <div class="col-span-2" :lg="3">
                                    <Button label="Download Form" backgroundColor="var(--primary-color)"
                                        name="DownloadFormButton" @button-on-click="downloadForm" />
                                </div>
                            </div>

                            <div class="mt-5 w-full border-t border-gray-200"></div>

                            <!-- Upload -->
                            <div>
                                <div class="col-span-6"></div>
                                <div class="col-span-5">
                                    <h3>
                                        Please Upload Scanned Signed Document
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <div class="col-span-4" :lg="7"></div>
                                <div class="col-span-4">
                                    <FileUpload name="uploadDocumentSelfEmployed" label="" icon="pi pi-file-pdf"
                                        @file-selected="handleFile" />
                                </div>
                            </div>
                        </TabPanel>

                        <!-- ================= E-SIGNATURE TAB ================= -->
                        <TabPanel header="E-Signature">

                            <!-- Header Card -->
                            <div class="esign-header">
                                <div>
                                    <h2>Reference ID: APJ22545566</h2>
                                    <p>User Name | Auto Loan</p>
                                </div>
                                <span>
                                    Date: 12/12/2025 12:00 AM
                                </span>
                            </div>


                            <!-- Loan Info -->
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-4" :lg="12">
                                    <p><strong>Loan Amount:</strong> 100,000</p>
                                    <p><strong>Loan Period:</strong> 36 months</p>
                                    <p><strong>Total Repayment:</strong> 114,026.4</p>
                                </div>

                                <div class="col-span-4" :lg="12">
                                    <p><strong>Interest Rate:</strong> 8.5%</p>
                                    <p><strong>Monthly Repayment:</strong> 3167.4</p>
                                    <p><strong>Outstanding Balance:</strong> 63,348</p>
                                </div>
                            </div>

                            <!-- Signature Area -->
                            <div class="my-4 h-px w-full bg-gray-300"></div>

                            <h3 class="esign-title">E-Signature</h3>

                            <TabView v-model:activeIndex="activeSubTab">
                                <!-- <TabPanel header="Draw">
                                    <div class="signature-pad">
                                        <p class="placeholder">Signature canvas here</p>
                                    </div>
                                </TabPanel> -->

                                <TabPanel header="Type">
                                    <!-- <el-input placeholder="Type your signature" /> -->
                                    <TextBox name="TypeyourSignatureTextBox" label="Type your signature"
                                        dataType="alphaNumericSpecial" maxLength=45 :mandatory=true
                                        :modelValue=TypeyourSignatureTextBox
                                        @text-box-on-blur="TypeyourSignatureTextBoxonBlur" />
                                </TabPanel>

                                <TabPanel header="Upload">
                                    <FileUpload name="signatureImage" label="Upload signature image"
                                        icon="pi pi-file-pdf" @file-selected="handleFile" />
                                </TabPanel>
                            </TabView>

                        </TabPanel>
                    </TabView>
                </fieldset>
            </AccordionContent>
            <fieldset>
                <div class="grid grid-cols-12 gap-4">

                    <div class="col-span-2" :lg="3">
                        <Button label="Cancel" backgroundColor="var(--primary-color)" name="cancelButton"
                            @button-on-click="CancelForm" />
                    </div>
                    <div class="col-span-8" :lg="18">
                    </div>
                    <div class="col-span-2" :lg="3">
                        <Button label="Sumbit" backgroundColor="var(--primary-color)" name="submitButton"
                            @button-on-click="SubmitForm" />
                    </div>
                </div>
            </fieldset>
        </AccordionPanel>

        <!-- //////// -->
        <div v-if="successDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 ">
            <!-- Modal -->
            <div class="w-full max-w-[450px] min-h-[250px] rounded-xl bg-white shadow-xl mt-[50px]">
                <div class="relative px-6 pt-2 pb-6 text-center">

                    <!-- Success Icon -->
                    <div class="relative flex flex-col items-center px-6 py-2 text-center">
                        <div
                            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]">
                            <svg width="32" height="24" viewBox="0 0 16 12" fill="none">
                                <path d="M1 6L6 11L15 1" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    <!-- Title -->
                    <h2 class="mb-2 text-lg font-semibold text-[var(--primary-color)]">
                        Loan Application Submitted Successfully.
                    </h2>

                    <!-- Description -->
                    <p class="mb-6 text-sm leading-relaxed text-gray-700">
                        Please check your <strong>email</strong>, we've also sent
                        <strong>Reference ID</strong> to your provided email.
                        <br />
                        Please follow the instructions to confirm your registration,
                        activate your account, and complete your application process successfully.
                    </p>

                    <!-- OK Button -->
                    <div class="grid grid-cols-12 gap-4 mb-4">
                        <div class="col-span-4"></div>
                        <div class="col-span-4">
                            <Button label="OK" backgroundColor="var(--primary-color)" name="okButton"
                                @button-on-click="handleOk" />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </Accordion>
</template>
<script setup>
import { ref, defineAsyncComponent, watch, computed } from "vue";
import { Button, Checkbox, TextBox, TextArea, Dropdown, Label, RadioButton, FileUpload } from '@cms/ui-components';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import coApplicantGrid from "../components/coApplicantGrid.vue";
import InputOtp from 'primevue/inputotp';

import { useRouter } from 'vue-router'
const router = useRouter();
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
// import axios from 'axios';
const resetter = (() => {
    const trackedRefs = []; // store all refs with initial values

    return {
        // replacement for ref()
        ref(initialValue) {
            const r = ref(initialValue);
            trackedRefs.push({ r, initialValue }); // track it
            return r;
        },

        // reset all tracked refs
        resetState() {
            trackedRefs.forEach(({ r, initialValue }) => {
                r.value = initialValue;
            });
        }
    };
})();
//////////////////////////
const panel0 = resetter.ref(null);
const panel1 = resetter.ref(null);
const panel2 = resetter.ref(null);
const panel3 = resetter.ref(null);
const panel4 = resetter.ref(null);
const panel5 = resetter.ref(null);
const panel6 = resetter.ref(null);
const panel7 = resetter.ref(null);
const panel8 = resetter.ref(null);
const panel9 = resetter.ref(null);
const panel10 = resetter.ref(null);
const panel11 = resetter.ref(null);
const panel12 = resetter.ref(null);

const isNextButtonDisabled = computed(() => {
    if (isAccountHolder.value == 'yes') {
        if (accountNumberValue.value !== "")
            return false;
        else
            return true;
    }
    return false;
});
const accountNumberValue = resetter.ref('');
const AccountNumberTextBox = (event, val) => {
    accountNumberValue.value = val;
}
const mobileNoTextBox = (event, val) => {
    mobileNo.value = val;
}
const emailAddressTextBox = (event, val) => {
    emailAddress.value = val;
}
const timeLeft = resetter.ref(60); // 60 seconds = 1:00
let timer = null;

const isSendOTPButtonDisabled = computed(() => {
    return mobileNo.value == '' || emailAddress.value == '';
})
const verifyButtonDisabled = computed(() => {
    return InputOtpValue.value.toString().length == 6 ? false : true
})
const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
const startTimer = () => {
    clearInterval(timer);
    timeLeft.value = 60;

    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
const onResendClick = () => {
    startTimer();
}
const IdentificationTypeDropDown = (val) => {
    identificationType.value = val?.value;
}
const cnicPassportNumberTextBox = (event, val) => {
    cnicNo.value = val;
}
const isFetchButtonDisabled = computed(() => {
    return identificationType.value == '' || cnicNo.value == "";
})
const isSendInviteButtonDisabled = computed(() => {
    return nameCoApplicant.value == '' || emailCoApplicant.value == '' || mobileCoApplicant.value == '' || nameCoApplicant.value == ' ' || emailCoApplicant.value == ' ' || mobileCoApplicant.value == ' ';
})
const isNextButtonAcPersonalDetailsDisabled = ref(true)
// computed(() => {
// return (purposeOfAccount.value == "" || accountCategory.value == "" || currency.value == "" || modeOfTransaction.value == "" || deliveryChannels.value == "" ||
//     highestBalance.value == "" || depositPerMonth.value == "" || NumberOfDepositPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "" || NumberOfWithdrawalPerMonth.value == "") ||
//     (TaxResidentCountry.value == 'yes' && (Country.value == '' || CRSTin.value == "" || Reason.value == ""))
// })
const OTPFlag = resetter.ref(false);

//////////////////////////
const activeNames = resetter.ref(['0']);
const mobileNo = resetter.ref('');
const emailAddress = resetter.ref('');
const InputOtpValue = resetter.ref('');
const isAccountHolder = resetter.ref('no');
const RadioBtnYesNoList = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
]
const identificationType = resetter.ref('');
const identificationTypesList = resetter.ref([
    { label: 'CNIC', value: 'CNIC' },
    { label: 'Passport', value: 'Passport' },
    { label: 'NICOP', value: 'NICOP' }
]);
const cnicNo = resetter.ref('');
const fullName = resetter.ref('');
const cnicIssueDate = resetter.ref('');
const cnicExpiryDate = resetter.ref('');
const ntnNumber = resetter.ref('');
const salutationList = resetter.ref([{ label: 'Mr.', value: 'Mr.' },
{ label: 'Mrs.', value: 'Mrs.' },
{ label: 'Ms.', value: 'Ms.' }]);
const salutation = resetter.ref('');
const qualification = resetter.ref('');
const qualificationList = resetter.ref([{ label: 'Matric', value: 'Matric' },
{ label: 'Intermediate', value: 'Intermediate' },
{ label: 'Bachelor', value: 'Bachelor' }]);
const maritalStatus = resetter.ref('');
const maritalStatusList = resetter.ref([{ label: 'Single', value: 'Single' },
{ label: 'Married', value: 'Married' },
{ label: 'Divorced', value: 'Divorced' }]);
const fatherSpouseRadioBtn = resetter.ref('Father Name');
const fatherSpouseRadioBtnList = resetter.ref([{ label: 'Father Name', value: 'Father Name' },
{ label: 'Spouse Name', value: 'Spouse Name' }])
const motherName = resetter.ref('');
const dateOfBirth = resetter.ref('');
const fatherSpouseName = resetter.ref('');
const children = resetter.ref('');
const otherPhoneNo = resetter.ref('');
const otherDependent = resetter.ref('');
const nextOfKin = resetter.ref('');
const nextOfKinRelation = resetter.ref('');
const nextOfKinCnic = resetter.ref('');
const nextOfKinAddress = resetter.ref('');
const haveVehicle = resetter.ref('no');
const vehicleModel = resetter.ref('');
const vehicleStatus = resetter.ref('');
const vehicleStatusList = resetter.ref([{ label: 'New', value: 'New' },
{ label: 'Old', value: 'Old' }]);
const bankModeOfCoomunication = resetter.ref('email');
const bankModeOfCoomunicationList = [
    { label: 'Email', value: 'email' },
    { label: 'Hard Copy', value: 'hardCopy' }
]
const purposeOfAccount = resetter.ref('');
const purposeOfAccountList = resetter.ref([{ label: 'Current', value: 'Current' },
{ label: 'Saving', value: 'Saving' }]);
const accountCategory = resetter.ref('');
const accountCategoryList = resetter.ref([{ label: 'Singly', value: 'Singly' },
{ label: 'Joint', value: 'Joint' }]);
const currency = resetter.ref('');
const currencyList = resetter.ref([{ label: 'Pakistani Rupees', value: 'Pakistani Rupees' },
{ label: 'U.S Dollars', value: 'U.S Dollars' }]);
const chequeBookRequired = resetter.ref('yes');
const estatementRequired = resetter.ref('yes');
const smsAlert = resetter.ref('yes');
const isPep = resetter.ref('yes');
const PepList = resetter.ref([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'BY way of Association/Relationship', value: 'BY way of Association/Relationship' },
])
const salutationList2 = resetter.ref([{ label: 'Mr.', value: 'Mr.' },
{ label: 'Mrs.', value: 'Mrs.' },
{ label: 'Ms.', value: 'Ms.' }]);
const salutation2 = resetter.ref('');
const fullname2 = resetter.ref('');
const cnicNo2 = resetter.ref('');
const cnicIssueDate2 = resetter.ref('');
const cnicExpiryDate2 = resetter.ref('');
const modeOfTransaction = resetter.ref('');
const modeOfTransactionList = resetter.ref([{ label: 'Cash.', value: 'Cash.' },
{ label: 'Online.', value: 'Online.' }]);
const deliveryChannels = resetter.ref('');
const deliveryChannelsList = resetter.ref([{ label: 'Cash.', value: 'Cash.' },
{ label: 'Online.', value: 'Online.' },
{ label: 'Telephone Banking.', value: 'Telephone Banking.' },
{ label: 'Wire Transfers.', value: 'Wire Transfers.' }]);
const highestBalance = resetter.ref('');
const depositPerMonth = resetter.ref('');
const NumberOfDepositPerMonth = resetter.ref('');
const NumberOfDepositPerMonthList = resetter.ref([{ label: '1', value: '1' },
{ label: '2', value: '2' },
{ label: '3', value: '3' },
{ label: '4', value: '4' }]);
const NumberOfWithdrawalPerMonth = resetter.ref('');
const NumberOfWithdrawalPerMonthList = resetter.ref([{ label: '1', value: '1' },
{ label: '2', value: '2' },
{ label: '3', value: '3' },
{ label: '4', value: '4' }]);
const USCitizen = resetter.ref('no');
const USCardHolder = resetter.ref('no');
const USResidentTaxPurpose = resetter.ref('no');
const USBorn = resetter.ref('no');
const outsideUSBorn = resetter.ref('no');
const CountryOfStay = resetter.ref('no');
const USTelephoneNo = resetter.ref('no');
const standingInstructions = resetter.ref('no');
const USMailingAddress = resetter.ref('no');
const HoldMail = resetter.ref('no');
const TaxIdenNumber = resetter.ref('');
const TaxResidentCountry = resetter.ref('no');
const Country = resetter.ref('');
const CountryList = resetter.ref([{ label: 'Pakistan', value: 'Pakistan' },
{ label: 'U.S', value: 'U.S' }]);
const CRSTin = resetter.ref('');
const CurrAddCountry = resetter.ref('');
const Province = resetter.ref('');
const ProvinceList = resetter.ref([{ label: 'Punjab', value: 'Punjab' }, { label: 'Sindh', value: 'Sindh' }]);
const City = resetter.ref('');
const CityList = resetter.ref([{ label: 'Islamabad', value: 'Islamabad' }, { label: 'Lahore', value: 'Lahore' }]);
const Area = resetter.ref('');
const BlockTextBoxValue = resetter.ref('');
const HouseNo = resetter.ref('');
const NearestLandMark = resetter.ref('');
const ResidenceStatus = resetter.ref('');
const ResidenceStatusList = resetter.ref([{ label: 'Current', value: 'Current' }, { label: 'Permanent', value: 'Permanent' }]);
const timeAtCurrentAddress = resetter.ref('');
const AccomodationType = resetter.ref('');
const AccomodationTypeList = resetter.ref([{ label: 'Rented', value: 'Rented' }, { label: 'Own', value: 'Own' }]);
const rentInRs = resetter.ref('');
const Reason = resetter.ref('');
const ReasonList = resetter.ref([{ label: 'Other', value: 'Other' }]);

const cnicNoTextBox = (val) => {
    cnicNo.value = val;
}
const highestBalanceTextBox = (val) => {
    highestBalance.value = val;
}
const depositPerMonthTextBox = (val) => {
    depositPerMonth.value = val;
}
const CRSTinTextBox = (val) => {
    CRSTin.value = val;
}
const fatherSpouseRadioBtnOnChange = (val) => {
    fatherSpouseRadioBtn.value = val;
}
const haveVehicleRadioButtonOnChange = (val) => {
    haveVehicle.value = val;
}
const bankModeOfCoomunicationOnChange = (val) => {
    bankModeOfCoomunication.value = val;
}
const salutationDropDown = (val) => {
    debugger;
    salutation.value = val?.value;
}
const qualificationDropDown = (val) => {
    qualification.value = val?.value;
}
const maritalStatusDropDown = (val) => {
    maritalStatus.value = val?.value;
}
const purposeOfAccountDropDown = (val) => {
    purposeOfAccount.value = val?.value;
}
const accountCategoryDropDown = (val) => {
    accountCategory.value = val?.value;
}
const currencyDropDown = (val) => {
    currency.value = val?.value;
}
const chequeBookRequiredRadioButton = (val) => {
    chequeBookRequired.value = val;
}
const estatementRequiredRadioButton = (val) => {
    estatementRequired.value = val;
}
const smsAlertRadioButton = (val) => {
    smsAlert.value = val;
}
const isPepRadioButton = (val) => {
    isPep.value = val;
}
const modeOfTransactionDropDown = (val) => {
    modeOfTransaction.value = val?.value;
}
const deliveryChannelsDropDown = (val) => {
    deliveryChannels.value = val?.value;
}
const NumberOfDepositPerMonthDropDown = (val) => {
    NumberOfDepositPerMonth.value = val?.value;
}
const NumberOfWithdrawalPerMonthDropDown = (val) => {
    NumberOfWithdrawalPerMonth.value = val?.value;
}
const USCitizenRadioButton = (val) => {
    USCitizen.value = val;
}
const USCardHolderRadioButton = (val) => {
    USCardHolder.value = val;
}
const USResidentTaxPurposeRadioButton = (val) => {
    USResidentTaxPurpose.value = val;
}
const USBornRadioButton = (val) => {
    USBorn.value = val;
}
const outsideUSBornRadioButton = (val) => {
    outsideUSBorn.value = val;
}
const CountryOfStayRadioButton = (val) => {
    CountryOfStay.value = val;
}
const USTelephoneNoRadioButton = (val) => {
    USTelephoneNo.value = val;
}
const standingInstructionsRadioButton = (val) => {
    standingInstructions.value = val;
}
const USMailingAddressRadioButton = (val) => {
    USMailingAddress.value = val;
}
const HoldMailRadioButton = (val) => {
    HoldMail.value = val;
}
const TaxResidentCountryRadioButton = (val) => {
    TaxResidentCountry.value = val;
}
const CountryDropDown = (val) => {
    Country.value = val?.value;
}
const ReasonDropDown = (val) => {
    Reason.value = val?.value;
}
////Ocupational Details
const OccupationalStatusValue = resetter.ref('');
const OccupationalStatusList = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business', value: 'Business' }
];
const occupationProfession = resetter.ref('');
const employmemntLength = resetter.ref('');
const employerName = resetter.ref('');
const employmentYears = resetter.ref('');
const position = resetter.ref('');
const officeAddress = resetter.ref('');
const phone = resetter.ref('');
const fax = resetter.ref('');
const officeEmail = resetter.ref('');
const employerName2 = resetter.ref('');
const phone2 = resetter.ref('');
const fax2 = resetter.ref('');
const inEmploymentSince = resetter.ref('');
const preferredMailingAddress = resetter.ref('Current Address');
const preferredMailingAddressList = [
    { label: 'Current Address', value: 'Current Address' },
    { label: 'Permanent Address', value: 'Permanent Address' },
    { label: 'Temporary Address', value: 'Temporary Address' },
    { label: 'Office Address', value: 'Office Address' },
    { label: 'Other', value: 'Other' },


];
const isDisabledNextButtonOccupationalDetails = computed(() => {
    return false;
    // return OccupationalStatusValue.value == "" || occupationProfession.value == "" || employmemntLength.value == "" || employerName.value == "" || employmentYears.value == "" || position.value == "" || officeAddress.value == ""
})
const occupationalStatusDropDown = (val) => {
    OccupationalStatusValue.value = val?.value;
}
const occupationProfessionTextBox = (event, val) => {
    occupationProfession.value = val;
}
const employmemntLengthTextBox = (event, val) => {
    employmemntLength.value = val;
}
const employerNameTextBox = (event, val) => {
    employerName.value = val;
}
const employmentYearsTextBox = (event, val) => {
    employmentYears.value = val;
}
const positionTextBox = (event, val) => {
    position.value = val;
}
const officeAddressTextBox = (event, val) => {
    officeAddress.value = val;
}
//////Income

const grossMonthlySalary = resetter.ref('');
const netMonthlyIncome = resetter.ref('');
const monthlyIncomeFromOtherSourcesTabular = resetter.ref('');
const otherIncomeSources = resetter.ref('');
const totalGrossMonthlyIncome = resetter.ref('');
const endOfServiceBenefits = resetter.ref('');
/////Desired Financing
const vehicleType = resetter.ref('');
const vehicleTypeList = [
    { label: 'New', value: 'New' },
    { label: 'Used', value: 'Used' },
    { label: 'Reconditioned / Imported', value: 'Imported' }
];
const make = resetter.ref('');
const model = resetter.ref('');
const color = resetter.ref('');
const downPayment = resetter.ref('');
const price = resetter.ref('');
const modeOfFinancing = resetter.ref('Leasing');
const modeOfFinancingList = [
    { label: 'Leasing', value: 'Leasing' },
    { label: 'Markup Basis', value: 'Markup Basis' },
];
const desiredFinancingAmount = resetter.ref('');
const markUpMode = resetter.ref('Fixed');
const markUpModeList = [
    { label: 'Fixed', value: 'Fixed' },
    { label: 'Floating / Variable', value: 'Variable' }
];
const modeOfRepayment = resetter.ref('');
const modeOfRepaymentList = [
    { option: 'Online', value: 'Online' },
    { option: 'Cash', value: 'Cash' }
];
const desiredFinancing = resetter.ref('');
const desiredFinancingList = [
    { option: '1-year', value: '1-year' },
    { option: '2-year', value: '2-year' },
    { option: '3-year', value: '3-year' },
    { option: '4-year', value: '4-year' },

];




////Refrences
const Reference1Name = resetter.ref('');
const Reference1Relationship = resetter.ref('');
const Reference1CNIC = resetter.ref('');
const Reference1Address = resetter.ref('');
const Reference1HomePhone = resetter.ref('');
const Reference1OtherPhone = resetter.ref('');
const Reference1Mobile = resetter.ref('');

const Reference2Name = resetter.ref('');
const Reference2Relationship = resetter.ref('');
const Reference2CNIC = resetter.ref('');
const Reference2Address = resetter.ref('');
const Reference2HomePhone = resetter.ref('');
const Reference2OtherPhone = resetter.ref('');
const Reference2Mobile = resetter.ref('');
///Document
const SalariedOrselfEmployed = resetter.ref("salariedIndividual");
const RadioBtnDocumentList = [
    { label: 'Salaried Individual', value: 'salariedIndividual' },
    { label: 'Self Employed / Business Indivial', value: 'selfEmployedBusinessIndivial' }
]
const fetchBankStatementButton = () => {


}
////co applicant
const coApplicantList = resetter.ref([
]);
const coApplicantValue = resetter.ref('no');
const nameCoApplicant = resetter.ref('');
const mobileCoApplicant = resetter.ref('');
const emailCoApplicant = resetter.ref('');
/////Branch
const accountTitleBranchSelection = resetter.ref('');
const accountNoBranchSelection = resetter.ref('');
const Branch = resetter.ref('');
const branchValue = resetter.ref('currentBranch')
const selectedCity = resetter.ref('');
const selectedCityList = resetter.ref([{ id: 1, label: 'Islamabad', value: 'Islamabad' },
{ id: 2, label: 'Karachi', value: 'Karachi' }]);
const selectedArea = resetter.ref('');
const selectedAreaList = resetter.ref([{ label: 'F-6', value: 'F-6' },
{ label: 'Clifton', value: 'Clifton' }]);
const selectedBranch = resetter.ref('');
const selectedBranchList = resetter.ref([{ label: 'F-6 Branch', value: 'F-6 Branch' },
{ label: 'Clifton Branch', value: 'Clifton Branch' }]);
const branchList = [
    { label: 'My Current Branch', value: 'currentBranch' },
    { label: 'Select Other Branch', value: 'otherBranch' }
]
//////////CF1 Form

const cleanCreditCardBankName = resetter.ref('');
const cleanCreditCardApprovedLimit = resetter.ref('');
const securedCreditCardBankName = resetter.ref('');
const securedCreditCardApprovedLimit = resetter.ref('');
const cleanPersonalLoanBankName = resetter.ref('');
const cleanPersonalLoanApprovedLimit = resetter.ref('');
const cleanPersonalLoanOutstandingAmount = resetter.ref('');
const securedPersonalLoanBankName = resetter.ref('');
const securedPersonalLoanApprovedLimit = resetter.ref('');
const securedPersonalLoanOutstandingAmount = resetter.ref('');
const otherFacilitiesBankName = resetter.ref('');
const otherFacilitiesApprovedLimit = resetter.ref('');
const natureOfFacility = resetter.ref('');
const natureOfFacilityList = resetter.ref([{ label: 'Clean', value: 'Clean' },
{ label: 'Secured', value: 'Secured' }]);
const otherFacilitiesOutstandingAmount = resetter.ref('');
const appliedLimitsBankName = resetter.ref('');
const appliedLimitsFacilityUnderProcess = resetter.ref('');
const appliedLimitsnatureOfFacility = resetter.ref('');
const appliedLimitsnatureOfFacilityList = resetter.ref([{ label: 'Clean', value: 'Clean' },
{ label: 'Secured', value: 'Secured' }]);
/////Undertaking
const undertaking1 = resetter.ref(false);
const signaturePreview = resetter.ref(null);
const activeTab = resetter.ref(0);
const activeSubTab = resetter.ref(0);
const successDialog = resetter.ref(false)

const cleanCreditCardBankNameTextBox = (val) => {

}
/////////////////////////
const accountInfo = resetter.ref(true);
const verification = resetter.ref(false);
const AcPersonalDetails = resetter.ref(false);
const AcPersonalDetailsExisting = resetter.ref(false);
const OccupationalDetails = resetter.ref(false);
const incomeDetails = resetter.ref(false);
const desiredFinancingDetails = resetter.ref(false);
const references = resetter.ref(false);
const Documents = resetter.ref(false);
const coApplicant = resetter.ref(false);
const branchSelection = resetter.ref(false);
const cf1Form = resetter.ref(false);
const reviewAndVerify = resetter.ref(false);
const underTaking = resetter.ref(false);

////////////////////////
const accountHolderOnChange = (val) => {
    resetter.resetState();
    isAccountHolder.value = val;

    // verification.value = false;
    // AcPersonalDetails.value = false;
    // AcPersonalDetailsExisting.value = false;
    // OccupationalDetails.value = false;
    // incomeDetails.value = false;
    // desiredFinancingDetails.value = false;
    // references.value = false;
    // Documents.value = false;
    // coApplicant.value = false;
    // branchSelection.value = false;
    // cf1Form.value = false;
    // reviewAndVerify.value = false;
    // underTaking.value = false;
    // console.log(isAccountHolder.value);
    // if (isAccountHolder.value == "yes") {
    //     router.push("/ExistingCustomerLoanApplication")
    // }
}
const saveInputValue = (val) => {
    InputOtpValue.value = val.value;
}

const sendOTPButton = () => {
    OTPFlag.value = true;
    startTimer();
}
const nextButton = () => {
    if (isAccountHolder.value == 'yes') {
        OTPFlag.value = true;
        startTimer();
    }
    verification.value = true;
    activeNames.value.push('1')
};
const verifyButton = () => {
    if (isAccountHolder.value == 'yes') {
        AcPersonalDetailsExisting.value = true;
        FetchButton();
    } else {
        AcPersonalDetails.value = true;
    }
    clearInterval(timer);
    timeLeft.value = 0;
    activeNames.value.push('2')
};
const nextButtonAcPersonalDetails = () => {
    OccupationalDetails.value = true;
    activeNames.value.push('3')
};
const nextButtonOccupationalDetails = () => {
    incomeDetails.value = true;
    activeNames.value.push("4");
}
const nextButtonIncomeDetails = () => {
    desiredFinancingDetails.value = true;
    activeNames.value.push("5");
}
const nextButtonDesiredFinancingDetails = () => {
    references.value = true;
    activeNames.value.push("6");
}
const nextButtonReferences = () => {
    Documents.value = true;
    activeNames.value.push("7");
}
const nextButtonDocuments = () => {
    coApplicant.value = true;
    activeNames.value.push("8");
}
const nextButtonCoApplicant = () => {
    branchSelection.value = true;
    activeNames.value.push("9");
}
const nextButtonBranchSelection = () => {
    cf1Form.value = true;
    activeNames.value.push("10");
}
const nextButtonCF1Form = () => {
    reviewAndVerify.value = true;
    activeNames.value.push("11");
}
const nextReviewAndVerify = () => {
    underTaking.value = true;
    activeNames.value.push("12");
}
const addNewCoApplicant = (val) => {
    console.log("addNewCoApplicant...")
}
const sendInviteButton = (val) => {
    coApplicantList.value.push(
        {
            name: nameCoApplicant.value,
            status: 'Pending'
        }
    )
    nameCoApplicant.value = ' ';
    emailCoApplicant.value = ' ';
    mobileCoApplicant.value = ' ';
}
const nameCoApplicantTextBox = (event, val) => {
    debugger;
    nameCoApplicant.value = val;
}
const mobileCoApplicantTextBox = (event, val) => {
    debugger;
    mobileCoApplicant.value = val;
}
const emailCoApplicantTextBox = (event, val) => {
    debugger;
    emailCoApplicant.value = val;
}
const preferredMailingAddressOnChange = (val) => {
    preferredMailingAddress.value = val;
}
const branchOnChange = (val) => {
    branchValue.value = val;
}
const SalariedOrselfEmployedChange = (val) => {
    SalariedOrselfEmployed.value = val;
}

const vehicleTypeOnChange = (val) => {
    vehicleType.value = val;
}
const modeOfFinancingOnChange = (val) => {
    modeOfFinancing.value = val;
}
const markUpModeOnChange = (val) => {
    markUpMode.value = val;
}
const FetchButton = async () => {
    // const res = await axios.get('/fetchData.json');
    // fullName.value = res.data?.[0]?.fullName;
    // cnicIssueDate.value = res.data?.[0]?.cnicIssueDate;
    // cnicExpiryDate.value = res.data?.[0]?.cnicExpiryDate;
    // ntnNumber.value = res.data?.[0]?.ntnNumber;
    // salutation.value = res.data?.[0]?.salutation;
    // qualification.value = res.data?.[0]?.qualification;
    // maritalStatus.value = res.data?.[0]?.maritalStatus;
    // dateOfBirth.value = res.data?.[0]?.dateOfBirth;
    // fatherSpouseName.value = res.data?.[0]?.fatherSpouseName;
    // motherName.value = res.data?.[0]?.motherName;
    // children.value = res.data?.[0]?.children;
    // otherDependent.value = res.data?.[0]?.otherDependent;
    // otherPhoneNo.value = res.data?.[0]?.otherPhoneNo;
    // nextOfKin.value = res.data?.[0]?.nextOfKin;
    // nextOfKinRelation.value = res.data?.[0]?.nextOfKinRelation;
    // nextOfKinCnic.value = res.data?.[0]?.nextOfKinCnic;
    // nextOfKinAddress.value = res.data?.[0]?.nextOfKinAddress;
    // vehicleModel.value = res.data?.[0]?.vehicleModel;
    // vehicleStatus.value = res.data?.[0]?.vehicleStatus;
    isNextButtonAcPersonalDetailsDisabled.value = false;
    if (isAccountHolder.value == 'yes') {
        identificationType.value = 'CNIC';
        cnicNo.value = "82313-2135678-2"
    }
    fullName.value = "Izza Zaheer";
    cnicIssueDate.value = "02/02/2020";
    cnicExpiryDate.value = "02/02/2030";
    ntnNumber.value = "78965425";
    salutation.value = "Ms.";
    qualification.value = "Bachelor";
    maritalStatus.value = "Single";
    dateOfBirth.value = "02/02/2011";
    fatherSpouseName.value = "Muhammad Ali";
    motherName.value = "Nisa Khan";
    children.value = '0';
    otherDependent.value = '0';
    otherPhoneNo.value = "0351-5442088";
    nextOfKin.value = "Ali";
    nextOfKinRelation.value = "Brother";
    nextOfKinCnic.value = "37402-0961617-7";
    nextOfKinAddress.value = "Rawalpindi, Pakistan.";
    vehicleModel.value = "MX255";
    vehicleStatus.value = "Old"

}

const coApplicantRadioButtonOnChange = (val) => {
    coApplicantValue.value = val;
}
const downloadForm = () => {
    // window.open('/form.pdf', '_blank')
}
const handleFile = (val) => {
    console.log(val);

}
const handleSignatureUpload = (file) => {
    signaturePreview.value = URL.createObjectURL(file.raw)
}
const onTabChange = (event) => {
    console.log('New tab index:', event.index)
    activeSubTab.value = 0
}
const CancelForm = () => {
    router.push("./origination")
}
const SubmitForm = () => {
    successDialog.value = true
}

const handleOk = () => {
    successDialog.value = false
    router.push('/origination') // 👈 change route
}
</script>
<style scoped>
/* ---------- Info Box ---------- */
.info-box {
    background-color: #fffbe6;
    border: 1px solid #f0e1a0;
    border-radius: 8px;
    padding: 10px;
    margin: 20px auto;
    max-width: 960px;
    /* ✅ fixed readable width */
    width: 100%;
}

/* ---------- Header ---------- */
.info-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    max-width: 720px;
    /* ✅ keeps text compact */
    margin: 0 auto;
}

.info-icon {
    font-size: 26px;
    line-height: 1;
    color: #f5b400;
}

.info-header strong {
    font-size: 15px;
}

.info-header p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #6b7280;
}

/* ---------- Divider ---------- */
.info-box hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #e5e7eb;
}

/* ---------- Content ---------- */
.info-content {
    display: flex;
    justify-content: center;
    gap: 80px;
    /* ✅ smaller gap */
    flex-wrap: wrap;
}

.info-column {
    min-width: 260px;
    /* ✅ prevents squeeze */
}

.info-column h4 {
    margin-bottom: 8px;
    font-size: 14px;
    color: #6b7280;
}

.info-column ul {
    margin: 0;
    padding-left: 18px;
    color: #6b7280;
}

.info-column li {
    margin-bottom: 6px;
    font-size: 14px;
}

/* ---------- Mobile ---------- */
@media (max-width: 640px) {
    .info-box {
        padding: 20px;
        margin: 32px 16px;
    }

    .info-header {
        max-width: 100%;
    }

    .info-content {
        gap: 32px;
    }
}

.section-header {
    margin-bottom: 1rem;
}

.section-header h3 {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
    margin-left: 10px;
    padding-bottom: 8px;
}

.section-header h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.signature-text {
    color: #606266;
    line-height: 1.6;
}

.esign-header {
    background: var(--primary-color);
    color: white;
    padding: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.signature-preview {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: #f9fafb;
    display: flex;
    justify-content: center;
}

.signature-preview img {
    max-height: 120px;
    object-fit: contain;
}


.icon-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
}

.icon-circle .pi {
    color: var(--primary-color);
    font-size: 1rem;
}

.icon-text {
    color: black;
    vertical-align: middle;
}

fieldset {
    padding: 0.99% !important;
    border: 1px solid var(--border-color) !important;

}
</style>