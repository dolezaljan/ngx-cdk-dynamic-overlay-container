echo "Patching node_modules/@angular/material/dialog/index.d.ts"
sed -i -e 's/private _dialog\;/protected _dialog\;/g' node_modules/@angular/material/dialog/index.d.ts
