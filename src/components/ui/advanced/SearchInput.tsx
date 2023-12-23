import React, { useState } from 'react'
import { IconInput } from '@/components/ui/advanced/IconInput'

const SearchInput: React.FC = () => {
	const [searchVal, setSearchVal] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchVal(event.target.value)
	}

	return (
		<IconInput
			type="text"
			placeholder="Search"
			iconName="Search"
			value={searchVal}
			onChange={handleInputChange}
		/>
	)
}

export { SearchInput }
