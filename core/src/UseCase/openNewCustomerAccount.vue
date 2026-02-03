<template>
    <div class="p-5 ml-5 mr-5 bg-white rounded-xl">
        <Accordion class="accordianClass" multiple v-model:value="activeNames">
            <div v-if="openCustomer" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openCustomer" value="0" ref="panel0">
                    <AccordionHeader>Open New Customer's Fast Account</AccordionHeader>
                    <AccordionContent>
                        <div class="grid grid-cols-2 gap-5 mb-4">
                            <div>
                                <Dropdown v-bind="{ ...BranchDropdownProps }" @dropdown-on-change="onDropDownchange"
                                    :isFloatableLabel="true" />
                            </div>
                            <div>
                                <TextBox backgroundColor="" name="Generic" v-bind="{ ...CustomerTextBoxProps }"
                                    :isFloatableLabel="true" @text-box-on-blur="onBlur"
                                    @text-box-on-key-press="onKeyPress" @text-box-on-key-down="onKeyDown"
                                    @text-box-on-key-up="onKeyUp" @text-box-on-input="onInput"
                                    @text-box-on-focus="onFocus" @text-box-on-paste="onPaste"
                                    @text-box-on-drop="onDrop" />
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-11"></div>
                            <div class="col-span-1">
                                <Button backgroundColor="var(--primary-color)" native-type="button" name="NextButton"
                                    label="Next" @Button-onClick="nextButtonClick" @Button-onFocus="buttonOnFocus"
                                    @Button-onBlur="buttonOnBlur" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <!-- //2nd panel ye ha isko akhir ma ana ha -->

            <div v-if="openBiometricDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openBiometricDetails" value="2" ref="panel2">
                    <AccordionHeader>Biometric Details</AccordionHeader>
                    <AccordionContent>
                        <div class="mb-4">
                            <Table name="BiometricDetailsTable" :tableColumns="biometricColumns"
                                :tableData="biometricData" :selectedRows="onBiometricCurrentRow"
                                @table-row-click="onBiometricRowClick" tableHeight="50" headerLabelsFontWeight="normal"
                                headrLabelColor="blue" labelFontWeight="normal" labelColor="black"
                                backgroundColor="white" tableMode="single" />
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-9"></div>
                            <div class="col-span-2">
                                <Button @Button-onClick="viewDetailsButtonOnClick"
                                    backgroundColor="var(--primary-color)" label="View Details" />
                            </div>
                            <div class="col-span-1">
                                <Button @Button-onClick="biometricExitButtonOnClick"
                                    backgroundColor="var(--primary-color)" label="Exit" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="openBiometricVerification" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openBiometricVerification" value="3" ref="panel3">
                    <AccordionHeader>Biometric Verification Details</AccordionHeader>
                    <AccordionContent>
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="grid grid-cols-4 gap-4 mb-4">
                                <Dropdown isDisabled v-bind="{ ...idDocType }" isFloatableLabel
                                    label="Identity Doc Type" />
                                <TextBox backgroundColor="" isDisabled v-model="idDocNo" isFloatableLabel
                                    label="Identity Doc. No." />
                                <Dropdown isDisabled v-bind="{ ...custType }" isFloatableLabel label="Cust. Type" />
                                <Dropdown isDisabled v-bind="{ ...categoryAC }" isFloatableLabel
                                    label="Category of A/C" />
                            </div>
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-3">
                                    <TextBox backgroundColor="" isDisabled v-model="limitation" isFloatableLabel
                                        label="Limitation" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox backgroundColor="" isDisabled v-model="refNo" isFloatableLabel
                                        label="Reference No" />
                                </div>
                                <div class="col-span-3">
                                    <TextBox backgroundColor="" isDisabled v-model="crtNo" isFloatableLabel
                                        label="Certification Number" />
                                </div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="entityButtonOnClick" backgroundColor="var(--primary-color)"
                                        label="Entity Info" class="h-full" />
                                </div>
                                <div class="col-span-2">
                                    <div class="flex items-center">
                                        <Checkbox isDisabled chekbox-label="Primary Applicant" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="grid grid-cols-3 gap-4 mb-4">
                                <TextBox backgroundColor="" isDisabled v-model="TitleAC" isFloatableLabel
                                    label="Title of Account" />
                                <TextBox backgroundColor="" isDisabled v-model="IdExpiryDate" isFloatableLabel
                                    label="Id Expiry Date" />
                                <TextBox backgroundColor="" isDisabled v-model="dob" isFloatableLabel label="D.O.B" />
                            </div>
                            <div class="grid grid-cols-3 gap-4 mb-4">
                                <TextBox backgroundColor="" isDisabled v-model="cnicName" isFloatableLabel
                                    label="CNIC Name" />
                                <TextBox backgroundColor="" isDisabled v-model="custMemName" isFloatableLabel
                                    label="Cust/Hsm Name" />
                                <TextBox backgroundColor="" isDisabled v-model="fathHusbName" isFloatableLabel
                                    label="Fath/Husb. Name" />
                            </div>
                            <div class="grid grid-cols-3 gap-4">
                                <TextBox backgroundColor="" isDisabled v-model="birthPlace" isFloatableLabel
                                    label="Place Of Birth" />
                                <div class="flex items-center">
                                    <Checkbox isDisabled chekbox-label="Debarred List Checked" />
                                </div>
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <TextArea backgroundColor="" isDisabled v-model="permanentAdd" isFloatableLabel
                                    label="Permanent Address" />
                                <TextArea backgroundColor="" isDisabled v-model="presentAdd" isFloatableLabel
                                    label="Current Address" />
                            </div>
                            <div class="grid grid-cols-3 gap-4 mb-4">
                                <TextBox backgroundColor="" isDisabled v-model="houseFlatNo" isFloatableLabel
                                    label="House/Flat No." />
                                <TextBox backgroundColor="" isDisabled v-model="streetNo" isFloatableLabel
                                    label="Street/Lane Name" />
                                <TextBox backgroundColor="" isDisabled v-model="areaTown" isFloatableLabel
                                    label="Area/Town/Village" />
                            </div>
                            <div class="grid grid-cols-4 gap-4">
                                <Dropdown isDisabled v-bind="{ ...countryBio }" isFloatableLabel label="Country" />
                                <Dropdown isDisabled v-bind="{ ...cityBio }" isFloatableLabel label="City" />
                                <Dropdown isDisabled v-bind="{ ...provinceBio }" isFloatableLabel label="Province" />
                                <Dropdown isDisabled v-bind="{ ...nationality }" isFloatableLabel label="Nationality" />
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-6">
                                    <Dropdown isDisabled v-bind="{ ...occupation }" isFloatableLabel
                                        label="Occupation" />
                                </div>
                                <div class="col-span-2">
                                    <Checkbox isDisabled chekbox-label="Other Nationality" />
                                </div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="addViewButtonOnClick"
                                        backgroundColor="var(--primary-color)" label="Add/View" />
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-8">
                                    <TextBox backgroundColor="" isDisabled v-model="purpose" isFloatableLabel
                                        label="Purpose" />
                                </div>
                                <div class="col-span-2 flex flex-col justify-center text-xs">
                                    <p>Capture Time: 11:18:35</p>
                                </div>
                                <div class="col-span-2 flex flex-col justify-center text-xs">
                                    <p>Capture Date: 2022.11.25</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <TextBox backgroundColor="" isDisabled v-model="verificationStatus" isFloatableLabel
                                    label="Verification Status" />
                                <TextBox backgroundColor="" isDisabled v-model="nadirMsg" isFloatableLabel
                                    label="Nadir Message" />
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-1">
                                <!-- <Button isDisabled backgroundColor="var(--primary-color)" label="Add" /> -->
                            </div>
                            <div class="col-span-1">
                                <!-- <Button isDisabled backgroundColor="var(--primary-color)" label="Change" /> -->
                            </div>
                            <div class="col-span-8"></div>
                            <div class="col-span-1">
                                <!-- <Button isDisabled backgroundColor="var(--primary-color)" label="Print" /> -->
                            </div>
                            <div class="col-span-1">
                                <Button @Button-onClick="biometricBackButtonOnClick"
                                    backgroundColor="var(--primary-color)" label="Back" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="openEntityDetails" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openEntityDetails" value="4" ref="panel4">
                    <AccordionHeader>Entity Details</AccordionHeader>
                    <AccordionContent>
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div style="color:var(--primary-color)" class="font-semibold text-sm mb-3 text-gray-700">
                                Entity Information</div>

                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="Entity Name"
                                    v-model="entityName" />
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="Registration No."
                                    v-model="regNo" />
                            </div>

                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <Dropdown isDisabled isFloatableLabel label="Registered Country"
                                    v-bind="{ ...regCountry }" />
                                <div class="grid grid-cols-12 gap-2">
                                    <div class="col-span-12">
                                        <TextBox isDisabled backgroundColor="" isFloatableLabel label="NTN"
                                            v-model="ntn" />
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="House/Flat No., St./Lane"
                                    v-model="houseNo" />
                                <Dropdown isDisabled isFloatableLabel label="Country" v-bind="{ ...country }" />
                            </div>

                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="Street/Lane/Ave. Name"
                                    v-model="streetName" />
                                <Dropdown :textColor="null" isDisabled isFloatableLabel label="City"
                                    v-bind="{ ...city }" />
                            </div>

                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="Area/Town/ Village"
                                    v-model="area" />
                                <TextBox isDisabled backgroundColor="" isFloatableLabel label="Province"
                                    v-model="province" />
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm mb-3 text-gray-700">Tagging CIF Entity With Entity
                                Account(s)
                            </div>

                            <div
                                class="grid grid-cols-12 gap-4 items-center border border-gray-100 p-3 rounded-lg bg-gray-50 mb-4">
                                <div class="col-span-1">
                                    <Button @Button-onClick="tagCIFButtonOnClick" backgroundColor="var(--primary-color)"
                                        label="Tag CIF" class="w-full" />
                                </div>
                                <div class="col-span-2">
                                    <a href="#" class="text-blue-600 text-sm hover:underline">{{ selectedCif || "New CIF"}}</a>
                                </div>
                                <div class="col-span-5"></div>
                                <div class="col-span-4 text-right">
                                    <span class="text-blue-500 text-xs italic">Hint: Please tag the CIF first</span>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 mt-4">
                                <div class="col-span-11"></div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="entityBackButtonOnClick"
                                        backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="openTaggingCifEntity" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openTaggingCifEntity" value="5" ref="panel5">
                    <AccordionHeader>Tagging CIF Entity With Entity Account(s)</AccordionHeader>
                    <AccordionContent>
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm mb-3 text-[var(--primary-color)]">Tagging CIF Entity with
                                Entity Account
                            </div>

                            <div class="grid grid-cols-12 gap-5 mb-4">
                                <div class="col-span-6">
                                    <TextBox backgroundColor="" isFloatableLabel label="NTN" v-model="filter.ntn" />
                                </div>
                                <div class="col-span-6">
                                    <TextBox backgroundColor="" isFloatableLabel label="Reg No"
                                        v-model="filter.regNo" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-5 mb-4">
                                <div class="col-span-6">
                                    <Dropdown isFloatableLabel label="ID Category" v-model="filter.idCategory" />
                                </div>
                                <div class="col-span-6">
                                    <TextBox backgroundColor="" isFloatableLabel label="ID No" v-model="filter.idNo" />
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-5 mb-4 items-end">
                                <div class="col-span-4">
                                    <TextBox backgroundColor="" isFloatableLabel label="CIF" v-model="filter.cif" />
                                </div>
                                <div class="col-span-5">
                                    <TextBox backgroundColor="" isFloatableLabel label="Name" v-model="filter.name" />
                                </div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="searchButtonOnClick" backgroundColor="var(--primary-color)"
                                        label="Search" class="w-full" />
                                </div>
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm mb-4 text-gray-700">All Records</div>

                            <div class="grid grid-cols-12 mb-4">
                                <div class="col-span-12">
                                    <Table name="CIFTaggingTable" :tableColumns="cifColumns" :tableData="cifData"
                                        :selectedRows="onCifCurrentRow" @table-row-click="onCifRowClick"
                                        tableHeight="60" headerLabelsFontWeight="normal" headrLabelColor="blue"
                                        labelFontWeight="normal" labelColor="black" backgroundColor="white"
                                        tableMode="single" />
                                </div>
                            </div>
                        </div>

                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                            <Checkbox name="NewCIF" chekbox-label="New CIF" v-model="isNewCif" />
                            <div class="grid grid-cols-12 gap-4 items-center">
                                <div class="col-span-1">
                                    <Button @Button-onClick="selectButtonOnClick" backgroundColor="var(--primary-color)"
                                        label="Select" :isDisabled="!(isNewCif || onCifCurrentRow)" class="w-full" />
                                </div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="resetButtonOnClick" backgroundColor="var(--primary-color)"
                                        label="Reset" class="w-full" />
                                </div>
                                <div class="col-span-9"></div>
                                <div class="col-span-1">
                                    <Button @Button-onClick="cifBackButtonOnClick"
                                        backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="openAddandView" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openAddandView" value="6" ref="panel6">
                    <AccordionHeader>Add/Remove Other Nationality</AccordionHeader>
                    <AccordionContent>
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm mb-3 text-[var(--primary-color)]">Add/Remove Other
                                Nationalities</div>

                            <!-- //// -->
                            <div class="grid grid-cols-12 gap-4 items-center">
                                <div class="col-span-5">
                                    <div class="text-xs font-medium mb-1 text-gray-500 uppercase">Available</div>
                                    <div class="border border-gray-300 rounded-lg h-64 overflow-y-auto bg-gray-50 p-2">
                                        <div v-for="nat in availableNationalities" :key="nat.code"
                                            @click="activeAvailable = nat; activeSelected = null"
                                            :class="['text-sm p-1.5 cursor-pointer rounded mb-1 transition',
                                                activeAvailable?.code === nat.code ? 'bg-[var(--primary-color)] text-white' : 'hover:bg-blue-100']">
                                            {{ nat.name }}-{{ nat.code }}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-2 flex flex-col gap-2 px-2">
                                    <Button backgroundColor="var(--primary-color)" label="Add All >>"
                                        class="w-full text-xs" :disabled="availableNationalities.length === 0"
                                        @Button-onClick="addAll" />

                                    <Button backgroundColor="var(--primary-color)" label="Add >" class="w-full text-xs"
                                        :disabled="!activeAvailable" @Button-onClick="addSelected" />

                                    <Button backgroundColor="var(--primary-color)" label="< Remove"
                                        class="w-full text-xs" :disabled="!activeSelected"
                                        @Button-onClick="removeSelected" />

                                    <Button backgroundColor="var(--primary-color)" label="<< Remove All"
                                        class="w-full text-xs" :disabled="selectedNationalities.length === 0"
                                        @Button-onClick="removeAll" />
                                </div>

                                <div class="col-span-5">
                                    <div class="text-xs font-medium mb-1 text-gray-500 uppercase">Selected</div>
                                    <div class="border border-gray-300 rounded-lg h-64 overflow-y-auto bg-white p-2">
                                        <div v-for="nat in selectedNationalities" :key="nat.code"
                                            @click="activeSelected = nat; activeAvailable = null"
                                            :class="['text-sm p-1.5 cursor-pointer rounded mb-1 font-semibold transition',
                                                activeSelected?.code === nat.code ? 'bg-red-600 text-white' : 'hover:bg-red-50']">
                                            {{ nat.name }}-{{ nat.code }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- //// -->

                            <div class="grid grid-cols-12 mt-4">
                                <div class="col-span-11"></div>
                                <div class="col-span-1 text-right">
                                    <Button @Button-onClick="addAndRemoveButtonOnClick"
                                        backgroundColor="var(--primary-color)" label="Back" class="w-full" />
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <!-- //idhar fadd kardia -->
            <div v-if="openFastAccount" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openFastAccount" value="1" ref="panel1">
                    <AccordionHeader>Open Fast Account</AccordionHeader>
                    <AccordionContent>
                        <div class="grid grid-cols-3 gap-5 mb-4">
                            <Dropdown v-bind="{ ...BranchDropdownProps }" isFloatableLabel label="Branch" />
                            <TextBox backgroundColor="" v-bind="{ ...CustomerTextBoxProps }" isFloatableLabel
                                label="Customer No." />
                            <TextBox backgroundColor="" v-bind="{ ...ACOpeningTextBoxProps }" isFloatableLabel
                                label="A/C Opening Date" />
                        </div>
                        <div class="grid grid-cols-12 gap-4 mb-4">
                            <div class="col-span-4">
                                <TextBox @text-box-on-key-up="onReferenceNoKeyUp" backgroundColor=""
                                    v-bind="{ ...ReferenceNoTextBoxProps }" isFloatableLabel label="Reference No" />
                            </div>
                            <div class="col-span-1">
                                <Button backgroundColor="var(--primary-color)" :isDisabled="enableDisabledFetchButton"
                                    @Button-onClick="fetchButtonOnClick" label="Fetch" />
                            </div>
                            <div class="col-span-1">
                                <!-- <Button backgroundColor="var(--primary-color)" label="Ref Inquiry" /> -->
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-11"></div>
                            <div class="col-span-1 ">
                                <Button @Button-onClick="fastOKButtonOnClick" :isDisabled="enableDisabledProcessButton"
                                    backgroundColor="var(--primary-color)" label="OK" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
            <div v-if="openProcessFastAccount" class="p-4 mb-8 bg-white rounded-xl border border-gray-200">
                <AccordionPanel v-if="openProcessFastAccount" value="7" ref="panel7">
                    <AccordionHeader>Process Fast Account</AccordionHeader>
                    <AccordionContent>
                        <div class="grid grid-cols-2 gap-5 mb-4">
                            <TextBox isDisabled backgroundColor="" v-model="processTitleAccount" isFloatableLabel
                                label="Title of A/C" />
                            <TextBox backgroundColor="" v-bind="{ ...ACCurrencyTextBoxProps }" isFloatableLabel
                                label="A/C Currency" />

                        </div>

                        <div class="grid grid-cols-4 gap-5">
                            <Dropdown @dropdown-on-change="ACTypeDropDownChange" v-bind="{ ...ACTypesDropDownProps }"
                                isFloatableLabel label="A/C Type" />
                            <TextBox backgroundColor="" @text-box-on-blur="onRunNoBlur"
                                v-bind="{ ...RunNoTextBoxProps }" isFloatableLabel label="Running No" />
                            <TextBox backgroundColor="" v-bind="{ ...CheckDigitTextBoxProps }" isFloatableLabel
                                label="Check Digit" />
                            <Checkbox name="ChequeBook" label="Cheque Book Required"
                                chekbox-label="Cheque Book Required" v-model="chequeBookRequired" />
                            <div></div>
                        </div>

                        <!-- A/C Classification -->
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm text-[var(--primary-color)] mb-1">A/C Classification</div>
                            <div class="grid grid-cols-2 gap-5 mb-4">
                                <Dropdown v-bind="{ ...CategoryDropDownProps }" isFloatableLabel label="Category" />
                                <Dropdown v-bind="{ ...AccountNatureDropDownProps }" isFloatableLabel
                                    label="A/C Nature" />
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-5">
                                    <Dropdown @dropdown-on-change="onMajorClassificationChange"
                                        v-bind="{ ...MajClassificationDropDownProps }" style="margin-bottom:2%"
                                        isFloatableLabel label="Major Classification" />

                                    <Dropdown @dropdown-on-change="onSubClassificationChange"
                                        v-if="!SubClassificationDropDownProps.isDisabled"
                                        v-bind="{ ...SubClassificationDropDownProps }" isFloatableLabel
                                        label="Sub Classification" />
                                </div>

                                <div class="col-span-1">
                                    <Button backgroundColor="var(--primary-color)" style="margin-bottom:10%"
                                        label="Add >" @click="addClassification" />
                                    <Button backgroundColor="var(--primary-color)" style="margin-bottom:2%"
                                        label="< Remove" @click="removeClassification" />
                                    <Checkbox name="Resident" chekbox-label="Resident" v-model="isResident" />
                                </div>

                                <div class="col-span-6">
                                    <TextArea isDisabled backgroundColor="" name="ACNotes" :is-floatable-label="true"
                                        v-model="acNotes" />
                                </div>
                            </div>

                        </div>

                        <!-- Marketing Source -->
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm text-[var(--primary-color)] mb-1">
                                Marketing Source
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-5">
                                    <Dropdown @dropdown-on-change="onMarketSourceChange"
                                        v-bind="{ ...marketSourceDropDownProps }" style="margin-bottom:0.8%"
                                        isFloatableLabel label="Market Source" />
                                </div>

                                <div class="col-span-1">
                                    <Button backgroundColor="var(--primary-color)" style="margin-bottom:6%"
                                        label="Add >" @click="addMarketSource" />
                                    <Button backgroundColor="var(--primary-color)" style="margin-bottom:2%"
                                        label="< Remove" @click="removeMarketSource" />
                                </div>

                                <div class="col-span-6">
                                    <TextArea name="MarketRemarks" backgroundColor="" isDisabled
                                        :is-floatable-label="true" v-model="marketRemarks" />
                                </div>
                            </div>
                        </div>


                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                            <div class="font-semibold text-sm mb-1 text-[var(--primary-color)]">
                                Introducer Information
                            </div>

                            <div class="grid grid-cols-4 gap-5">
                                <!-- Bank Name -->
                                <Dropdown @dropdown-on-change="onBankChange" v-bind="{ ...bankDropDownProps }" isFloatableLabel label="Bank Name" />

                                <!-- Account No -->
                                <TextBox backgroundColor="" isFloatableLabel label="A/C No" />

                                <!-- Branch Name (enabled after bank select) -->
                                <Dropdown @dropdown-on-change="onBranchChange" v-bind="{ ...branchDropDownProps }" isFloatableLabel label="Branch Name" />

                                <!-- Introducer Name -->
                                <TextBox backgroundColor="" isFloatableLabel label="Introducer Name" />
                            </div>
                        </div>


                        <!-- Footer Buttons -->
                        <div class="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-11"></div>
                                <div class="col-span-1 ">
                                    <Button @Button-onClick="processOKButtonOnClick"
                                        backgroundColor="var(--primary-color)" label="OK" />
                                </div>
                                <!-- <div class="col-span-1 ">
                            <Button backgroundColor="var(--primary-color)" label="Exit" />
                        </div> -->
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </div>
        </Accordion>
    </div>
    <div v-if="successDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
        <!-- Modal -->
        <div class="w-full max-w-[400px] min-h-[200px] rounded-xl bg-white shadow-xl ">
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
                <h2 class="mb-7 text-lg font-semibold text-[var(--primary-color)]">
                    Reference Code is <b>A17086</b>
                </h2>

                <!-- OK Button -->
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-4"></div>
                    <div class="col-span-4">
                        <Button label="OK" backgroundColor="var(--primary-color)" name="okButton"
                            @button-on-click="handleOk" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import {
    TextBox,
    Button,
    Table,
    Dropdown,
    Checkbox,
    RadioButton,
    TextArea,
    Label,
    FileUpload
} from '@cms/ui-components';

const router = useRouter();
///////////////////////////onMounted////////////////////////////////////////////\
onMounted(async () => {
    const module = await import('../data/customerOnBoarding.js');
    jsonData.value = module.default[0];
    BranchDropdownProps.value.modelValue = jsonData.value.openNewAccount.branchName;
    CustomerTextBoxProps.value.modelValue = Math.random().toString().slice(2, 8);
    ACOpeningTextBoxProps.value.modelValue = jsonData.value.openNewAccount.accountOpeningDate;
    biometricData.value = jsonData.value.openNewAccount.biometricTableData;
});
///////////////////////////Panel Visibility/////////////////////////////////////
const openCustomer = ref(true);
const openFastAccount = ref(false);
const openBiometricDetails = ref(false);
const openBiometricVerification = ref(false);
const openEntityDetails = ref(false);
const openTaggingCifEntity = ref(false);
const openAddandView = ref(false);
const openProcessFastAccount = ref(false);
const checkBiometric = ref(false)
///////////////////////////Refs///////////////////////////////////////////////////
const panel0 = ref(null)
const panel1 = ref(null)
const panel2 = ref(null)
const panel3 = ref(null)
const panel4 = ref(null)
const panel5 = ref(null)
const panel6 = ref(null)
const panel7 = ref(null)
const enableDisabledProcessButton = computed(() => {
    return !(checkBiometric.value);
});
const enableDisabledFetchButton = computed(() => {
    return !(ReferenceNoTextBoxProps.value.modelValue != "");
});
///////////////////////////model///////////////////////////////////////////////////
const jsonData = ref([])
const activeNames = ref(['0']);
const successDialog = ref(false);
const onBiometricCurrentRow = ref(null)
const entityName = ref('');
const regNo = ref('');
const regCountry = ref({
    modelValue: null,
    optionsList: [
        { label: 'AFGHANISTAN - 93', value: 'AFGHANISTAN - 93' },
        { label: 'ALBANIA - 355', value: 'ALBANIA - 355' },
        { label: 'ALGERIA - 213', value: 'ALGERIA - 213' },
        { label: 'ARGENTINA - 54', value: 'ARGENTINA - 54' },
        { label: 'AUSTRALIA - 61', value: 'AUSTRALIA - 61' },
        { label: 'AUSTRIA - 43', value: 'AUSTRIA - 43' },
        { label: 'BANGLADESH - 880', value: 'BANGLADESH - 880' },
        { label: 'BELGIUM - 32', value: 'BELGIUM - 32' },
        { label: 'BRAZIL - 55', value: 'BRAZIL - 55' },
        { label: 'CANADA - 1', value: 'CANADA - 1' },
        { label: 'CHINA - 86', value: 'CHINA - 86' },
        { label: 'DENMARK - 45', value: 'DENMARK - 45' },
        { label: 'EGYPT - 20', value: 'EGYPT - 20' },
        { label: 'FRANCE - 33', value: 'FRANCE - 33' },
        { label: 'GERMANY - 49', value: 'GERMANY - 49' },
        { label: 'HONG KONG - 852', value: 'HONG KONG - 852' },
        { label: 'INDIA - 91', value: 'INDIA - 91' },
        { label: 'INDONESIA - 62', value: 'INDONESIA - 62' },
        { label: 'IRAN - 98', value: 'IRAN - 98' },
        { label: 'IRAQ - 964', value: 'IRAQ - 964' },
        { label: 'IRELAND - 353', value: 'IRELAND - 353' },
        { label: 'ITALY - 39', value: 'ITALY - 39' },
        { label: 'JAPAN - 81', value: 'JAPAN - 81' },
        { label: 'KENYA - 254', value: 'KENYA - 254' },
        { label: 'KUWAIT - 965', value: 'KUWAIT - 965' },
        { label: 'MALAYSIA - 60', value: 'MALAYSIA - 60' },
        { label: 'MEXICO - 52', value: 'MEXICO - 52' },
        { label: 'NEPAL - 977', value: 'NEPAL - 977' },
        { label: 'NETHERLANDS - 31', value: 'NETHERLANDS - 31' },
        { label: 'NEW ZEALAND - 64', value: 'NEW ZEALAND - 64' },
        { label: 'NIGERIA - 234', value: 'NIGERIA - 234' },
        { label: 'NORWAY - 47', value: 'NORWAY - 47' },
        { label: 'OMAN - 968', value: 'OMAN - 968' },
        { label: 'PAKISTAN - 92', value: 'PAKISTAN - 92' },
        { label: 'PHILIPPINES - 63', value: 'PHILIPPINES - 63' },
        { label: 'POLAND - 48', value: 'POLAND - 48' },
        { label: 'QATAR - 974', value: 'QATAR - 974' },
        { label: 'RUSSIA - 7', value: 'RUSSIA - 7' },
        { label: 'SAUDI ARABIA - 966', value: 'SAUDI ARABIA - 966' },
        { label: 'SINGAPORE - 65', value: 'SINGAPORE - 65' },
        { label: 'SOUTH AFRICA - 27', value: 'SOUTH AFRICA - 27' },
        { label: 'SOUTH KOREA - 82', value: 'SOUTH KOREA - 82' },
        { label: 'SPAIN - 34', value: 'SPAIN - 34' },
        { label: 'SRI LANKA - 94', value: 'SRI LANKA - 94' },
        { label: 'SWEDEN - 46', value: 'SWEDEN - 46' },
        { label: 'SWITZERLAND - 41', value: 'SWITZERLAND - 41' },
        { label: 'THAILAND - 66', value: 'THAILAND - 66' },
        { label: 'TURKEY - 90', value: 'TURKEY - 90' },
        { label: 'UAE - 971', value: 'UAE - 971' },
        { label: 'UK - 44', value: 'UK - 44' },
        { label: 'USA - 840', value: 'USA - 840' },
        { label: 'VIETNAM - 84', value: 'VIETNAM - 84' },
        { label: 'ZIMBABWE - 263', value: 'ZIMBABWE - 263' }
    ],
})
const ntn = ref('');
const houseNo = ref('');
const country = ref({
    modelValue: null,
    optionsList: [
        { label: 'AFGHANISTAN - 93', value: 'AFGHANISTAN - 93' },
        { label: 'ALBANIA - 355', value: 'ALBANIA - 355' },
        { label: 'ALGERIA - 213', value: 'ALGERIA - 213' },
        { label: 'ARGENTINA - 54', value: 'ARGENTINA - 54' },
        { label: 'AUSTRALIA - 61', value: 'AUSTRALIA - 61' },
        { label: 'AUSTRIA - 43', value: 'AUSTRIA - 43' },
        { label: 'BANGLADESH - 880', value: 'BANGLADESH - 880' },
        { label: 'BELGIUM - 32', value: 'BELGIUM - 32' },
        { label: 'BRAZIL - 55', value: 'BRAZIL - 55' },
        { label: 'CANADA - 1', value: 'CANADA - 1' },
        { label: 'CHINA - 86', value: 'CHINA - 86' },
        { label: 'DENMARK - 45', value: 'DENMARK - 45' },
        { label: 'EGYPT - 20', value: 'EGYPT - 20' },
        { label: 'FRANCE - 33', value: 'FRANCE - 33' },
        { label: 'GERMANY - 49', value: 'GERMANY - 49' },
        { label: 'HONG KONG - 852', value: 'HONG KONG - 852' },
        { label: 'INDIA - 91', value: 'INDIA - 91' },
        { label: 'INDONESIA - 62', value: 'INDONESIA - 62' },
        { label: 'IRAN - 98', value: 'IRAN - 98' },
        { label: 'IRAQ - 964', value: 'IRAQ - 964' },
        { label: 'IRELAND - 353', value: 'IRELAND - 353' },
        { label: 'ITALY - 39', value: 'ITALY - 39' },
        { label: 'JAPAN - 81', value: 'JAPAN - 81' },
        { label: 'KENYA - 254', value: 'KENYA - 254' },
        { label: 'KUWAIT - 965', value: 'KUWAIT - 965' },
        { label: 'MALAYSIA - 60', value: 'MALAYSIA - 60' },
        { label: 'MEXICO - 52', value: 'MEXICO - 52' },
        { label: 'NEPAL - 977', value: 'NEPAL - 977' },
        { label: 'NETHERLANDS - 31', value: 'NETHERLANDS - 31' },
        { label: 'NEW ZEALAND - 64', value: 'NEW ZEALAND - 64' },
        { label: 'NIGERIA - 234', value: 'NIGERIA - 234' },
        { label: 'NORWAY - 47', value: 'NORWAY - 47' },
        { label: 'OMAN - 968', value: 'OMAN - 968' },
        { label: 'PAKISTAN - 92', value: 'PAKISTAN - 92' },
        { label: 'PHILIPPINES - 63', value: 'PHILIPPINES - 63' },
        { label: 'POLAND - 48', value: 'POLAND - 48' },
        { label: 'QATAR - 974', value: 'QATAR - 974' },
        { label: 'RUSSIA - 7', value: 'RUSSIA - 7' },
        { label: 'SAUDI ARABIA - 966', value: 'SAUDI ARABIA - 966' },
        { label: 'SINGAPORE - 65', value: 'SINGAPORE - 65' },
        { label: 'SOUTH AFRICA - 27', value: 'SOUTH AFRICA - 27' },
        { label: 'SOUTH KOREA - 82', value: 'SOUTH KOREA - 82' },
        { label: 'SPAIN - 34', value: 'SPAIN - 34' },
        { label: 'SRI LANKA - 94', value: 'SRI LANKA - 94' },
        { label: 'SWEDEN - 46', value: 'SWEDEN - 46' },
        { label: 'SWITZERLAND - 41', value: 'SWITZERLAND - 41' },
        { label: 'THAILAND - 66', value: 'THAILAND - 66' },
        { label: 'TURKEY - 90', value: 'TURKEY - 90' },
        { label: 'UAE - 971', value: 'UAE - 971' },
        { label: 'UK - 44', value: 'UK - 44' },
        { label: 'USA - 840', value: 'USA - 840' },
        { label: 'VIETNAM - 84', value: 'VIETNAM - 84' },
        { label: 'ZIMBABWE - 263', value: 'ZIMBABWE - 263' }
    ],
})
const streetName = ref('');
const city = ref({
    modelValue: null,
    optionsList: [
        { label: 'NEW YORK', value: 'NEW YORK' },
        { label: 'LOS ANGELES', value: 'LOS ANGELES' },
        { label: 'CHICAGO', value: 'CHICAGO' },
        { label: 'HOUSTON', value: 'HOUSTON' },
        { label: 'PHOENIX', value: 'PHOENIX' },
        { label: 'PHILADELPHIA', value: 'PHILADELPHIA' },
        { label: 'SAN ANTONIO', value: 'SAN ANTONIO' },
        { label: 'SAN DIEGO', value: 'SAN DIEGO' },
        { label: 'DALLAS', value: 'DALLAS' },
        { label: 'SAN JOSE', value: 'SAN JOSE' },
        { label: 'AUSTIN', value: 'AUSTIN' },
        { label: 'SEATTLE', value: 'SEATTLE' },
        { label: 'SAN FRANCISCO', value: 'SAN FRANCISCO' },
        { label: 'DENVER', value: 'DENVER' },
        { label: 'BOSTON', value: 'BOSTON' },
        { label: 'WASHINGTON, D.C.', value: 'WASHINGTON, D.C.' },
        { label: 'MIAMI', value: 'MIAMI' },
        { label: 'ORLANDO', value: 'ORLANDO' },
        { label: 'TAMPA', value: 'TAMPA' },
        { label: 'ATLANTA', value: 'ATLANTA' },
        { label: 'LAS VEGAS', value: 'LAS VEGAS' },
        { label: 'PORTLAND', value: 'PORTLAND' },
        { label: 'DETROIT', value: 'DETROIT' },
        { label: 'MINNEAPOLIS', value: 'MINNEAPOLIS' }
    ],
});
const area = ref('');
const province = ref('');
const chequeBookRequired = ref(false);
const acNotes = ref('');
const isResident = ref(false);
const idDocType = ref({
    modelValue: null,
    optionsList: [
        { label: 'CNIC', value: 'CNIC' },
        { label: 'PASSPORT', value: 'PASSPORT' },
        { label: 'NICOP', value: 'NICOP' }
    ],
});
const idDocNo = ref();
const custType = ref({
    modelValue: null,
    optionsList: [
        { label: 'DIRECTOR-15', value: 'DIRECTOR-15' }
    ],
});
const categoryAC = ref({
    modelValue: null,
    optionsList: [
        { label: 'TRUST-T', value: 'TRUST-T' }
    ],
})
const limitation = ref()
const refNo = ref()
const crtNo = ref()
const TitleAC = ref()
const IdExpiryDate = ref()
const dob = ref()
const cnicName = ref()
const custMemName = ref()
const fathHusbName = ref()
const birthPlace = ref()
const permanentAdd = ref()
const presentAdd = ref()
const houseFlatNo = ref()
const streetNo = ref()
const areaTown = ref()
const countryBio = ref({
    modelValue: null,
    optionsList: [
        { label: 'USA - 840', value: 'USA - 840' }
    ],
})
const cityBio = ref({
    modelValue: null,
    optionsList: [
        { label: 'SAN FRANCISCO', value: 'SAN FRANCISCO' }
    ],
})
const provinceBio = ref({
    modelValue: null,
    optionsList: [
        { label: 'CA - 412', value: 'CA - 412' }
    ],
})
const nationality = ref({
    modelValue: null,
    optionsList: [
        { label: 'AMERICAN', value: 'AMERICAN' }
    ],
})
const occupation = ref({
    modelValue: null,
    optionsList: [
        { label: 'BUSINESSMAN', value: 'BUSINESSMAN' }
    ],
})
const purpose = ref()
const verificationStatus = ref()
const nadirMsg = ref()
const CustomerTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'CustomerTextBox',
    label: 'Customer No.',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 20
});
const ACOpeningTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'ACOpeningTextBox',
    label: 'A/C Opening Date',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 10
})
const ReferenceNoTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'ReferenceNoTextBox',
    label: 'Reference No',
    isDisabled: false,
    dataType: 'alphaNumericSpecial',
    maxLength: 20
})
const RunNoTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'RunNoTextBox',
    label: 'Running No',
    isDisabled: false,
    dataType: 'alphaNumericSpecial',
    maxLength: 2
})
const CheckDigitTextBoxProps = ref({
    mandatory: false,
    modelValue: '',
    name: 'CheckDigitTextBox',
    label: 'Check Digit',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 1
})
const bankDropDownProps = ref({
    mandatory: false,
    label: 'Bank Name',
    optionsList: [
        // 🇺🇸 USA
        { label: 'JPMorgan Chase', value: 'JPMORGAN_CHASE' },
        { label: 'Bank of America', value: 'BANK_OF_AMERICA' },
        { label: 'Citibank', value: 'CITIBANK' },
        { label: 'Wells Fargo', value: 'WELLS_FARGO' },
        { label: 'Goldman Sachs', value: 'GOLDMAN_SACHS' },

        // 🇵🇰 Pakistan (Foreign / International Presence)
        { label: 'Standard Chartered Bank (Pakistan)', value: 'SCB_PAK' },
        { label: 'Citibank Pakistan', value: 'CITIBANK_PAK' },
        { label: 'Deutsche Bank Pakistan', value: 'DEUTSCHE_PAK' },

        // 🌍 International
        { label: 'HSBC', value: 'HSBC' },
        { label: 'Barclays', value: 'BARCLAYS' },

        { label: 'Other Foreign Bank', value: 'OTHER' }
    ],
    name: 'BankDropDown',
    modelValue: null,
    isDisabled: false
})
const branchDropDownProps = ref({
  mandatory: false,
  label: 'Branch Name',
  optionsList: [],
  name: 'BranchDropDown',
  modelValue: null,
  isDisabled: true
})
const bankBranchMap = {
    JPMORGAN_CHASE: [
        { label: 'New York Main Branch', value: 'NY_MAIN' },
        { label: 'San Francisco Branch', value: 'SF' }
    ],
    BANK_OF_AMERICA: [
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' }
    ],
    CITIBANK: [
        { label: 'New York', value: 'NY' },
        { label: 'London (International)', value: 'LONDON' }
    ],
    WELLS_FARGO: [
        { label: 'San Francisco', value: 'SF' }
    ],
    HSBC: [
        { label: 'Hong Kong Main', value: 'HK' },
        { label: 'London Main', value: 'LONDON' }
    ],
    SCB_PAK: [
        { label: 'Karachi Main Branch', value: 'KHI_MAIN' },
        { label: 'Lahore Branch', value: 'LHR' }
    ]
}

const ACCurrencyTextBoxProps = ref({
    modelValue: '',
    mandatory: false,
    name: 'ACCurrencyTextBox',
    label: 'A/C Currency',
    isDisabled: true,
    dataType: 'alphaNumericSpecial',
    maxLength: 30
})
const BranchDropdownProps = ref({
    label: 'Branch',
    mandatory: false,
    optionsList: [
        {
            label: '1016 - Wells Fargo Branch',
            value: '1016 - Wells Fargo Branch'
        }
    ],
    name: 'BranchDropdown',
    modelValue: '',
    isDisabled: true,
});
const CategoryDropDownProps = ref({
    mandatory: false,
    label: 'Category',
    optionsList: [
        { label: 'Deposit Account', value: 'DEPOSIT' },
        { label: 'Current Account', value: 'CURRENT' },
        { label: 'Savings Account', value: 'SAVINGS' },
        { label: 'Investment Account', value: 'INVESTMENT' },
        { label: 'Loan / Financing Account', value: 'LOAN' },
        { label: 'Credit / Card Account', value: 'CREDIT' },
        { label: 'Special Purpose Account', value: 'SPECIAL' }
    ],
    name: 'CategoryDropDown',
    mandatory: false,
    modelValue: '',
    isDisabled: false,
})
const AccountNatureDropDownProps = ref({
    label: 'A/C Nature',
    mandatory: false,
    optionsList: [
        { label: 'Individual', value: 'INDIVIDUAL' },
        { label: 'Joint', value: 'JOINT' },
        { label: 'Business', value: 'BUSINESS' }
    ],
    name: 'AccountNatureDropDown',
    modelValue: '',
    isDisabled: false,
})
const MajClassificationDropDownProps = ref({
    mandatory: false,
    label: 'Major Classification',
    optionsList: [
        { label: 'Retail Banking', value: 'RETAIL' },
        { label: 'Corporate Banking', value: 'CORPORATE' },
        { label: 'Investment Banking', value: 'INVESTMENT' },
        { label: 'Islamic Banking', value: 'ISLAMIC' }
    ],
    name: 'MajClassificationDropDown',
    modelValue: null,
    isDisabled: false
})

const SubClassificationDropDownProps = ref({
    mandatory: false,
    label: 'Sub Classification',
    optionsList: [],          // 🔴 initially empty
    name: 'SubClassificationDropDown',
    modelValue: null,
    isDisabled: true          // 🔴 initially disabled
})
const subClassificationMap = {
    RETAIL: [
        { label: 'Checking Account', value: 'CHECKING' },
        { label: 'Savings Account', value: 'SAVINGS' },
        { label: 'Student Account', value: 'STUDENT' },
        { label: 'Senior Citizen Account', value: 'SENIOR' }
    ],
    CORPORATE: [
        { label: 'SME Account', value: 'SME' },
        { label: 'Corporate Current Account', value: 'CORPORATE_CURRENT' }
    ],
    INVESTMENT: [
        { label: 'Money Market Account', value: 'MONEY_MARKET' },
        { label: 'Certificate of Deposit (CD)', value: 'CD' },
        { label: 'Brokerage Account', value: 'BROKERAGE' }
    ],
    ISLAMIC: [
        { label: 'Mudaraba Savings', value: 'MUDARABA' },
        { label: 'Islamic Current Account', value: 'ISLAMIC_CURRENT' }
    ]
}

const marketSourceDropDownProps = ref({
    mandatory: false,
    label: 'Market Source',
    optionsList: [
        { label: 'Branch', value: 'BRANCH' },
        { label: 'Online Banking', value: 'ONLINE_BANKING' },
        { label: 'Mobile App', value: 'MOBILE_APP' },
        { label: 'ATM / Kiosk', value: 'ATM_KIOSK' },
        { label: 'Call Center', value: 'CALL_CENTER' },
        { label: 'Corporate / SME Referral', value: 'CORPORATE_REFERRAL' },
        { label: 'FinTech Partner', value: 'FINTECH_PARTNER' },
        { label: 'Government / Payroll', value: 'GOV_PAYROLL' },
        { label: 'Other', value: 'OTHER' }
    ],
    name: 'marketSourceDropDown',
    modelValue: '',
    isDisabled: false,
})
const ACTypesDropDownProps = ref({
    mandatory: false,
    label: 'A/C Type',
    optionsList: [
        {
            label: 'Checking Account - 1001',
            value: 'CHECKING_ACCOUNT_1001'
        },
        {
            label: 'Savings Account - 2001',
            value: 'SAVINGS_ACCOUNT_2001'
        },
        {
            label: 'Money Market Account - 3001',
            value: 'MONEY_MARKET_ACCOUNT_3001'
        }
    ],
    name: 'ACTypeDropdown',
    modelValue: '',
    isDisabled: false,
})
const biometricColumns = ref([
    { prop: 'idDocType', label: 'ID Doc Type', width: 120 },
    { prop: 'idDocNo', label: 'ID Doc No', width: 180 },
    { prop: 'fingerNo', label: 'Finger No.', width: 90, align: 'center' },
    { prop: 'cnicName', label: 'CNIC Name', width: 160 },
    { prop: 'response', label: 'Response/Exception', width: 220 },
    { prop: 'nadraStatus', label: 'Nadra Status', width: 160 },
    { prop: 'accountNature', label: 'Account Nature', width: 180 },
    { prop: 'screenedStatus', label: 'Screened Status', width: 160, align: 'center' },
    { prop: 'screenedDesc', label: 'Screened Description', width: 260 }
])

const biometricData = ref()
// Table Columns Definition
const cifColumns = ref([
    { prop: 'cif', label: 'CIF', width: 100 },
    { prop: 'ntn', label: 'NTN', width: 140 },
    { prop: 'regNo', label: 'Reg No', width: 140 },
    { prop: 'customerName', label: 'Customer Name', width: 200 },
    { prop: 'telNo', label: 'Tel No', width: 130 },
    { prop: 'address', label: 'Address', width: 250 },
    { prop: 'address2', label: 'Address2', width: 200 },
    { prop: 'address3', label: 'Address3', width: 200 },
    { prop: 'country', label: 'Country', width: 150 },
    { prop: 'city', label: 'City', width: 130 },
    { prop: 'regDate', label: 'Reg Date', width: 120, align: 'center' }
])

// Table Data Row
const cifData = ref([])

// Filter State for Inputs
const filter = ref({
    ntn: '',
    regNo: '',
    idCategory: 'CNIC/NICOP/POC-01',
    idNo: '',
    cif: '',
    name: ''
})

const isNewCif = ref(false)
// Nationalities Data
const availableNationalities = ref([
    { name: 'AFGHAN', code: '004' },
    { name: 'ALBANIAN', code: '008' },
    { name: 'ALGERIAN', code: '012' },
    { name: 'AMERICAN', code: '840' },
    { name: 'ANDORRAN', code: '020' },
    { name: 'ANGOLAN', code: '024' },
    { name: 'ANTIGUAN', code: '028' },
    { name: 'ARGENTINE', code: '032' },
    { name: 'ARMENIAN', code: '051' },
    { name: 'AUSTRALIAN', code: '036' },
    { name: 'AUSTRIAN', code: '040' },
    { name: 'AZERBAIJANI', code: '031' },
    { name: 'BAHAMIAN', code: '044' },
    { name: 'BAHRAINI', code: '048' },
    { name: 'BANGLADESHI', code: '050' },
    { name: 'BARBADIAN', code: '052' },
    { name: 'BELARUSIAN', code: '112' },
    { name: 'BELGIAN', code: '056' },
    { name: 'BELIZEAN', code: '084' },
    { name: 'BENINESE', code: '204' },
    { name: 'BHUTANESE', code: '064' },
    { name: 'BOLIVIAN', code: '068' },
    { name: 'BOSNIAN', code: '070' },
    { name: 'BRAZILIAN', code: '076' },
    { name: 'BRITISH', code: '826' },
    { name: 'BRUNEIAN', code: '096' },
    { name: 'BULGARIAN', code: '100' },
    { name: 'CAMBODIAN', code: '116' },
    { name: 'CAMEROONIAN', code: '120' },
    { name: 'CANADIAN', code: '124' },
    { name: 'CHILEAN', code: '152' },
    { name: 'CHINESE', code: '156' },
    { name: 'COLOMBIAN', code: '170' },
    { name: 'CONGOLESE', code: '178' },
    { name: 'COSTA RICAN', code: '188' },
    { name: 'CROATIAN', code: '191' },
    { name: 'CUBAN', code: '192' },
    { name: 'CYPRIOT', code: '196' },
    { name: 'CZECH', code: '203' },
    { name: 'DANISH', code: '208' },
    { name: 'DJIBOUTIAN', code: '262' },
    { name: 'DOMINICAN', code: '214' },
    { name: 'DUTCH', code: '528' },
    { name: 'ECUADORIAN', code: '218' },
    { name: 'EGYPTIAN', code: '818' },
    { name: 'EMIRATI', code: '784' },
    { name: 'ESTONIAN', code: '233' },
    { name: 'ETHIOPIAN', code: '231' },
    { name: 'FIJIAN', code: '242' },
    { name: 'FILIPINO', code: '608' },
    { name: 'FINNISH', code: '246' },
    { name: 'FRENCH', code: '250' },
    { name: 'GEORGIAN', code: '268' },
    { name: 'GERMAN', code: '276' },
    { name: 'GHANAIAN', code: '288' },
    { name: 'GREEK', code: '300' },
    { name: 'GUATEMALAN', code: '320' },
    { name: 'HAITIAN', code: '332' },
    { name: 'HONDURAN', code: '340' },
    { name: 'HUNGARIAN', code: '348' },
    { name: 'ICELANDIC', code: '352' },
    { name: 'INDIAN', code: '356' },
    { name: 'INDONESIAN', code: '360' },
    { name: 'IRANIAN', code: '364' },
    { name: 'IRAQI', code: '368' },
    { name: 'IRISH', code: '372' },
    { name: 'ITALIAN', code: '380' },
    { name: 'JAMAICAN', code: '388' },
    { name: 'JAPANESE', code: '392' },
    { name: 'JORDANIAN', code: '400' },
    { name: 'KAZAKH', code: '398' },
    { name: 'KENYAN', code: '404' },
    { name: 'KUWAITI', code: '414' },
    { name: 'LATVIAN', code: '428' },
    { name: 'LEBANESE', code: '422' },
    { name: 'LIBYAN', code: '434' },
    { name: 'MALAYSIAN', code: '458' },
    { name: 'MALDIVIAN', code: '462' },
    { name: 'MEXICAN', code: '484' },
    { name: 'MOROCCAN', code: '504' },
    { name: 'NEPALESE', code: '524' },
    { name: 'NEW ZEALANDER', code: '554' },
    { name: 'NIGERIAN', code: '566' },
    { name: 'NORWEGIAN', code: '578' },
    { name: 'OMANI', code: '512' },
    { name: 'PAKISTANI', code: '586' },
    { name: 'PALESTINIAN', code: '275' },
    { name: 'PANAMANIAN', code: '591' },
    { name: 'PARAGUAYAN', code: '600' },
    { name: 'PERUVIAN', code: '604' },
    { name: 'POLISH', code: '616' },
    { name: 'PORTUGUESE', code: '620' },
    { name: 'QATARI', code: '634' },
    { name: 'ROMANIAN', code: '642' },
    { name: 'RUSSIAN', code: '643' },
    { name: 'SAUDI', code: '682' },
    { name: 'SINGAPOREAN', code: '702' },
    { name: 'SOUTH AFRICAN', code: '710' },
    { name: 'SPANISH', code: '724' },
    { name: 'SRI LANKAN', code: '144' },
    { name: 'SUDANESE', code: '729' },
    { name: 'SWEDISH', code: '752' },
    { name: 'SWISS', code: '756' },
    { name: 'SYRIAN', code: '760' },
    { name: 'THAI', code: '764' },
    { name: 'TUNISIAN', code: '788' },
    { name: 'TURKISH', code: '792' },
    { name: 'UGANDAN', code: '800' },
    { name: 'UKRAINIAN', code: '804' },
    { name: 'URUGUAYAN', code: '858' },
    { name: 'UZBEK', code: '860' },
    { name: 'VENEZUELAN', code: '862' },
    { name: 'VIETNAMESE', code: '704' },
    { name: 'YEMENI', code: '887' },
    { name: 'ZIMBABWEAN', code: '716' }
]);

const selectedNationalities = ref([
])
const activeAvailable = ref(null)
const activeSelected = ref(null)
const onCifCurrentRow = ref(null);
const selectedCif = ref();
const processTitleAccount = ref("DIRECTOR 1")
const marketRemarks = ref('')

////////////////////////////////////////Actions//////////////////////
const addMarketSource = () => {
    const value = marketSourceDropDownProps.value.modelValue
    if (!value) return

    const label =
        marketSourceDropDownProps.value.optionsList
            .find(o => o.value === value)?.label || value

    // duplicate avoid
    if (marketRemarks.value.includes(label)) return

    marketRemarks.value = marketRemarks.value
        ? `${marketRemarks.value}\n${label}`
        : label
}
const removeMarketSource = () => {
    if (!marketRemarks.value) return

    const lines = marketRemarks.value.split('\n')
    lines.pop()
    marketRemarks.value = lines.join('\n')
}

const onCifRowClick = (event) => {
    onCifCurrentRow.value = event
}
const onReferenceNoKeyUp = (event) => {
    ReferenceNoTextBoxProps.value.modelValue = event.target.value.toUpperCase();
}
const nextButtonClick = () => {
    openFastAccount.value = true
    activeNames.value.push('1')
    setTimeout(() => {
        panel1.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const fetchButtonOnClick = () => {
    openProcessFastAccount.value = false
    checkBiometric.value = true
    openBiometricDetails.value = true
    activeNames.value.push('2')
    setTimeout(() => {
        panel2.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const ACTypeDropDownChange = () => {
    ACCurrencyTextBoxProps.value.modelValue = 'AMERICAN DOLLAR USD - 840'
    ACCurrencyTextBoxProps.value.isDisabled = true
}
const onRunNoBlur = () => {
    CheckDigitTextBoxProps.value.modelValue = '5'

    CheckDigitTextBoxProps.value.isDisabled = true
}
const onBiometricRowClick = (event) => {
    onBiometricCurrentRow.value = event
}
const viewDetailsButtonOnClick = () => {
    idDocType.value.modelValue = jsonData.value.biometricVerificationDetails.idDocType
    idDocNo.value = jsonData.value.biometricVerificationDetails.idDocNo
    custType.value.modelValue = jsonData.value.biometricVerificationDetails.custType
    categoryAC.value.modelValue = jsonData.value.biometricVerificationDetails.categoryAC
    limitation.value = jsonData.value.biometricVerificationDetails.limitation
    refNo.value = jsonData.value.biometricVerificationDetails.refNo
    crtNo.value = jsonData.value.biometricVerificationDetails.crtNo
    TitleAC.value = jsonData.value.biometricVerificationDetails.TitleAC
    IdExpiryDate.value = jsonData.value.biometricVerificationDetails.IdExpiryDate
    dob.value = jsonData.value.biometricVerificationDetails.dob
    cnicName.value = jsonData.value.biometricVerificationDetails.cnicName
    custMemName.value = jsonData.value.biometricVerificationDetails.custMemName
    fathHusbName.value = jsonData.value.biometricVerificationDetails.fathHusbName
    birthPlace.value = jsonData.value.biometricVerificationDetails.birthPlace
    permanentAdd.value = jsonData.value.biometricVerificationDetails.permanentAdd
    presentAdd.value = jsonData.value.biometricVerificationDetails.presentAdd
    houseFlatNo.value = jsonData.value.biometricVerificationDetails.houseFlatNo
    streetNo.value = jsonData.value.biometricVerificationDetails.streetNo
    areaTown.value = jsonData.value.biometricVerificationDetails.areaTown
    countryBio.value.modelValue = jsonData.value.biometricVerificationDetails.countryBio
    cityBio.value.modelValue = jsonData.value.biometricVerificationDetails.cityBio
    provinceBio.value.modelValue = jsonData.value.biometricVerificationDetails.provinceBio
    nationality.value.modelValue = jsonData.value.biometricVerificationDetails.nationality
    occupation.value.modelValue = jsonData.value.biometricVerificationDetails.occupation
    purpose.value = jsonData.value.biometricVerificationDetails.purpose
    verificationStatus.value = jsonData.value.biometricVerificationDetails.verificationStatus
    nadirMsg.value = jsonData.value.biometricVerificationDetails.nadirMsg

    if (!onBiometricCurrentRow.value) {
        return;
    }
    openBiometricVerification.value = true
    activeNames.value.push('3')
    setTimeout(() => {
        panel3.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const entityButtonOnClick = () => {
    debugger
    entityName.value = jsonData.value.fistTimeEntityDetails.entityName;
    regNo.value = jsonData.value.fistTimeEntityDetails.regNo;
    regCountry.value.modelValue = jsonData.value.fistTimeEntityDetails.regCountry;
    ntn.value = jsonData.value.fistTimeEntityDetails.ntn;
    houseNo.value = jsonData.value.fistTimeEntityDetails.houseFlatNo;
    country.value.modelValue = jsonData.value.fistTimeEntityDetails.country;
    streetName.value = jsonData.value.fistTimeEntityDetails.streetNo;
    city.value.modelValue = jsonData.value.fistTimeEntityDetails.city;
    area.value = jsonData.value.fistTimeEntityDetails.areaTown;
    province.value = jsonData.value.fistTimeEntityDetails.province;
    openEntityDetails.value = true
    activeNames.value.push('4')
    setTimeout(() => {
        panel4.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const tagCIFButtonOnClick = () => {
    openTaggingCifEntity.value = true
    activeNames.value.push('5')
    setTimeout(() => {
        panel5.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const addViewButtonOnClick = () => {
    openAddandView.value = true
    activeNames.value.push('6')
    setTimeout(() => {
        panel6.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const fastOKButtonOnClick = () => {
    openBiometricDetails.value = false;
    openBiometricVerification.value = false;
    openEntityDetails.value = false;
    openTaggingCifEntity.value = false;
    openAddandView.value = false;
    openProcessFastAccount.value = true
    activeNames.value.push('7')
    setTimeout(() => {
        panel7.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const processOKButtonOnClick = () => {
    successDialog.value = true
}
const handleOk = () => {
    successDialog.value = false
    router.push({ name: 'CustomerOnboarding&Management' }) // 👈 change route
}
const searchButtonOnClick = () => {
    // Placeholder for search functionality
    if (filter.value.ntn || filter.value.regNo || filter.value.idNo || filter.value.cif || filter.value.name) {
        cifData.value = jsonData.value.cifData
    } else {
        return
    }
}
const resetButtonOnClick = () => {
    filter.value.ntn = ''
    filter.value.regNo = ''
    filter.value.idNo = ''
    filter.value.cif = ''
    filter.value.name = ''
    cifData.value = []
    onCifCurrentRow.value = null
    isNewCif.value = false
}
const selectButtonOnClick = () => {
    if (onCifCurrentRow.value) {
        isNewCif.value = false
        selectedCif.value = onCifCurrentRow.value.cif
        openTaggingCifEntity.value = false
        activeNames.value.push('4')
        setTimeout(() => {
            panel4.value?.$el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, 0);
    } else {
        isNewCif.value = true
        openTaggingCifEntity.value = false
        activeNames.value.push('4')
        setTimeout(() => {
            panel4.value?.$el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, 0);
    }
}
const cifBackButtonOnClick = () => {
    openTaggingCifEntity.value = false
    activeNames.value.push('4')
    setTimeout(() => {
        panel4.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const entityBackButtonOnClick = () => {
    openEntityDetails.value = false
    activeNames.value.push('3')
    setTimeout(() => {
        panel3.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const addAndRemoveButtonOnClick = () => {
    openAddandView.value = false
    activeNames.value.push('3')
    setTimeout(() => {
        panel3.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const biometricBackButtonOnClick = () => {
    openBiometricVerification.value = false
    activeNames.value.push('2')
    setTimeout(() => {
        panel2.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const biometricExitButtonOnClick = () => {
    openBiometricDetails.value = false
    activeNames.value.push('1')
    setTimeout(() => {
        panel1.value?.$el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 0);
}
const addClassification = () => {
    const major = MajClassificationDropDownProps.value.modelValue
    const sub = SubClassificationDropDownProps.value.modelValue

    if (!major || !sub) return

    // readable labels nikal lo
    const majorLabel =
        MajClassificationDropDownProps.value.optionsList
            .find(o => o.value === major)?.label || major

    const subLabel =
        SubClassificationDropDownProps.value.optionsList
            .find(o => o.value === sub)?.label || sub

    const line = `${majorLabel} → ${subLabel}`

    // duplicate text check
    if (acNotes.value.includes(line)) return

    // new line add
    acNotes.value = acNotes.value
        ? `${acNotes.value}\n${line}`
        : line
}

const removeClassification = () => {
    if (!acNotes.value) return

    const lines = acNotes.value.split('\n')
    lines.pop()
    acNotes.value = lines.join('\n')
}

const onMajorClassificationChange = (val) => {
    debugger
    MajClassificationDropDownProps.value.modelValue = val.value
}
const onSubClassificationChange = (val) => {
    SubClassificationDropDownProps.value.modelValue = val.value
    // Placeholder for any actions needed when sub-classification changes
}
const onMarketSourceChange = (val) => {
    marketSourceDropDownProps.value.modelValue = val.value
}
const onBankChange = (val) => {
    bankDropDownProps.value.modelValue = val.value
}
const onBranchChange = (val) => {
    branchDropDownProps.value.modelValue = val.value
}
// Logic Placeholders
// 1. Add All
const addAll = () => {
    selectedNationalities.value.push(...availableNationalities.value)
    availableNationalities.value = []
    activeAvailable.value = null
}

// 2. Add Single (Selected)
const addSelected = () => {
    if (activeAvailable.value) {
        selectedNationalities.value.push(activeAvailable.value)
        availableNationalities.value = availableNationalities.value.filter(n => n.code !== activeAvailable.value.code)
        activeAvailable.value = null // reset selection
    }
}

// 3. Remove Single
const removeSelected = () => {
    if (activeSelected.value) {
        availableNationalities.value.push(activeSelected.value)
        selectedNationalities.value = selectedNationalities.value.filter(n => n.code !== activeSelected.value.code)
        activeSelected.value = null // reset selection
    }
}

// 4. Remove All
const removeAll = () => {
    availableNationalities.value.push(...selectedNationalities.value)
    selectedNationalities.value = []
    activeSelected.value = null
}
////////////////////////////////watch////////////////////////////////////////
watch(
    () => MajClassificationDropDownProps.value.modelValue,
    (newMajor) => {
        if (newMajor) {
            SubClassificationDropDownProps.value.optionsList =
                subClassificationMap[newMajor] || []

            SubClassificationDropDownProps.value.isDisabled = false
            SubClassificationDropDownProps.value.modelValue = null
        } else {
            SubClassificationDropDownProps.value.optionsList = []
            SubClassificationDropDownProps.value.isDisabled = true
            SubClassificationDropDownProps.value.modelValue = null
        }
    }
)
watch(
  () => bankDropDownProps.value.modelValue,
  (bank) => {
    if (bank) {
      branchDropDownProps.value.optionsList =
        bankBranchMap[bank] || []

      branchDropDownProps.value.isDisabled = false
      branchDropDownProps.value.modelValue = null
    } else {
      branchDropDownProps.value.optionsList = []
      branchDropDownProps.value.isDisabled = true
      branchDropDownProps.value.modelValue = null
    }
  }
)
</script>